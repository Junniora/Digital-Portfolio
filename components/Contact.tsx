"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  /*
  // =========================================================================
  // LOGIC Y ESTADOS PARA EL FORMULARIO DE CONTACTO (COMENTADO TEMPORALMENTE)
  // =========================================================================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const result = await sendEmail({ name, email, subject, message });

      if (result.success) {
        setStatus("success");
        setFeedbackMsg(result.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedbackMsg(result.message);
      }
    } catch (error) {
      setStatus("error");
      setFeedbackMsg("Ocurrió un problema de conexión al intentar enviar el mensaje.");
    }
  };
  */

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Contacto"
          title="Iniciemos una conversación"
          subtitle="¿Tienes alguna oferta de prácticas, un proyecto o simplemente quieres saludar? Conéctate conmigo a través de mis canales directos."
        />

        {/* 
          RE-DISEÑO DEL LAYOUT DE CONTACTO:
          - Comentamos el formulario de envío.
          - Reestructuramos las tarjetas de redes para que ocupen todo el ancho horizontal en una fila de 3 columnas.
        */}
        <div className="w-full">
          {/*
          // =========================================================================
          // FORMULARIO DE CONTACTO (COMENTADO TEMPORALMENTE)
          // =========================================================================
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <Card hoverEffect={false} className="border border-white/5 bg-slate-950/40 p-6 md:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-8 space-y-4"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                      <FiCheckCircle className="text-4xl animate-bounce" />
                    </div>
                    <h3 className="text-xl font-bold text-white">¡Mensaje Enviado!</h3>
                    <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                      {feedbackMsg}
                    </p>
                    <Button 
                      onClick={() => setStatus("idle")} 
                      variant="secondary"
                      className="mt-4"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                        <FiAlertCircle className="text-lg shrink-0" />
                        <span>{feedbackMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Juan Pérez"
                          disabled={status === "submitting"}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm disabled:opacity-50"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="juan@ejemplo.com"
                          disabled={status === "submitting"}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Propuesta de práctica profesional / Proyecto"
                        disabled={status === "submitting"}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm disabled:opacity-50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hola Ángel, me interesaría platicar contigo sobre..."
                        disabled={status === "submitting"}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm resize-none disabled:opacity-50"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full sm:w-auto gap-2 disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensaje</span>
                          <FiSend className="text-sm" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
          */}

          {/* Tarjetas de Información / Enlaces Rápidos (Estructuradas horizontalmente) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Email */}
            <Card className="flex gap-4 items-center border border-white/5 hover:border-purple-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FiMail className="text-xl" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Correo directo</h4>
                <a
                  href="mailto:angelalvarezgr@gmail.com"
                  className="text-sm md:text-base font-bold text-white hover:text-purple-300 transition-colors duration-300 block truncate mt-1"
                >
                  angelalvarezgr@gmail.com
                </a>
              </div>
            </Card>

            {/* LinkedIn */}
            <Card className="flex gap-4 items-center border border-white/5 hover:border-purple-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FiLinkedin className="text-xl" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/angel-ricardo-alvarez-garcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold text-white hover:text-purple-300 transition-colors duration-300 block truncate mt-1"
                >
                  linkedin.com/in/angel-ricardo-alvarez-garcia
                </a>
              </div>
            </Card>

            {/* GitHub */}
            <Card className="flex gap-4 items-center border border-white/5 hover:border-purple-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FiGithub className="text-xl" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">GitHub</h4>
                <a
                  href="https://github.com/Junniora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold text-white hover:text-purple-300 transition-colors duration-300 block truncate mt-1"
                >
                  github.com/Junniora
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
