import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { FiArrowLeft, FiCode, FiLayers, FiCompass } from "react-icons/fi";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // En Next.js 15/16 params es una Promesa y debe ser esperada mediante await
  const { slug } = await params;

  // Formatear el slug para mostrar un nombre más legible (ej. "go-digital" -> "Go Digital")
  const displayTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background text-foreground">
      {/* Fondo decorativo coherente con el Hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-40" />
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <Container>
        {/* Botón de retroceso */}
        <div className="mb-10">
          <Button href="/" variant="outline" className="gap-2">
            <FiArrowLeft />
            <span>Volver al inicio</span>
          </Button>
        </div>

        {/* Encabezado del Proyecto */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Tag variant="cyan">Proyecto Dinámico</Tag>
            <Tag variant="purple">App Router</Tag>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            {displayTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Detalle técnico y caso de estudio para el proyecto {slug}. Esta página se genera dinámicamente utilizando el sistema de rutas dinámicas de Next.js.
          </p>
        </div>

        {/* Contenedor del Caso de Estudio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal (Estudio del Caso) */}
          <div className="lg:col-span-2 space-y-8">
            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCompass className="text-blue-400" />
                Problema & Reto
              </h2>
              <p className="text-gray-400 leading-relaxed">
                [Detalle del problema a resolver. Aquí se documentará la necesidad del cliente o del negocio, las limitaciones tecnológicas originales y los objetivos de transformación digital planteados.]
              </p>
            </Card>

            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCode className="text-cyan-400" />
                Solución Implementada
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                [Descripción detallada de la solución de software. Arquitectura elegida, justificación técnica del desarrollo y cómo esta solución mitiga de manera directa el problema.]
              </p>
            </Card>

            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiLayers className="text-indigo-400" />
                Arquitectura y Buenas Prácticas
              </h2>
              <p className="text-gray-400 leading-relaxed">
                [Diagrama de flujo o descripción de la infraestructura utilizada. Patrones de diseño implementados, principios SOLID aplicados, pruebas realizadas y buenas prácticas de desarrollo de software aplicadas.]
              </p>
            </Card>
          </div>

          {/* Columna Lateral (Metadatos del Proyecto) */}
          <div className="space-y-8">
            <Card className="border-blue-500/10">
              <h3 className="text-lg font-bold text-white mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                <Tag variant="blue">Next.js</Tag>
                <Tag variant="purple">TypeScript</Tag>
                <Tag variant="cyan">Tailwind CSS</Tag>
                <Tag variant="slate">React</Tag>
                <Tag variant="green">API Rest</Tag>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Resultados Obtenidos</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Optimización del 40% en carga</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Arquitectura modular y reusable</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Código 100% tipeado en TypeScript</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
