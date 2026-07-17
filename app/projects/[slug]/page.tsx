import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { FiArrowLeft, FiCode, FiLayers, FiCompass } from "react-icons/fi";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // En Next.js 15/16 params es una Promesa y debe ser esperada mediante await
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

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
            <span>Back to Home </span>
          </Button>
        </div>

        {/* Encabezado del Proyecto */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {/* <Tag variant="cyan">Proyecto Dinámico</Tag> */}
             {/*<Tag variant="purple">App Router</Tag> */}
          </div> 

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {project.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            {project.description}
          </p>
        </div>

        {/* Contenedor del Caso de Estudio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal (Estudio del Caso) */}
          <div className="lg:col-span-2 space-y-8">
            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCompass className="text-blue-400" />
                Problem & Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </Card>

            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCode className="text-cyan-400" />
                Implemented Solution
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {project.solution}
              </p>
            </Card>

            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiLayers className="text-indigo-400" />
                Architecture and Best Practices
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.architecture}
              </p>
            </Card>
          </div>

          {/* Columna Lateral (Metadatos del Proyecto) */}
          <div className="space-y-8">
            <Card className="border-blue-500/10">
              <h3 className="text-lg font-bold text-white mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech} variant="slate" className="text-xs py-0.5 px-2">
                    {tech}
                  </Tag>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Resultados Obtenidos</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {project.results.map((result) => (
                  <li key={result} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
