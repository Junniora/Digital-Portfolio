"use server";

interface SendEmailResponse {
  success: boolean;
  message: string;
  simulated?: boolean;
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<SendEmailResponse> {
  const { name, email, subject, message } = formData;

  // Validación básica del lado del servidor
  if (!name || !email || !subject || !message) {
    return { success: false, message: "Todos los campos son requeridos." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Si no hay API Key configurada, operamos en modo simulación (entorno de pruebas)
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY no está configurada en las variables de entorno. Ejecutando envío simulado."
    );
    // Simulamos un retraso de red de 1.5 segundos para que la UX de carga sea testeable
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
      success: true,
      simulated: true,
      message: "Envío simulado con éxito. Configura RESEND_API_KEY en tu .env.local para enviar correos reales.",
    };
  }

  try {
    // Usamos fetch nativo para llamar a la API REST de Resend directamente
    // de este modo evitamos instalar dependencias extras y problemas de compatibilidad con React 19/Next 16
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // El remitente por defecto del Sandbox de Resend. 
        // Si tienes dominio propio verificado en Resend, puedes cambiar esto a 'contacto@tudominio.com'
        from: "Contacto Portafolio <onboarding@resend.dev>",
        // Reemplaza esto con tu correo personal donde quieres recibir las notificaciones
        to: "junni.alvarez@outlook.com", 
        subject: `Nuevo mensaje de portafolio: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
            <h2 style="color: #4c1d95; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #4c1d95;">
              <p style="margin: 0; font-style: italic; color: #334155;">"${message}"</p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al comunicarse con Resend.");
    }

    return { success: true, message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto." };
  } catch (error: any) {
    console.error("Error en sendEmail server action:", error);
    return {
      success: false,
      message: error.message || "Ocurrió un error inesperado al enviar el mensaje.",
    };
  }
}
