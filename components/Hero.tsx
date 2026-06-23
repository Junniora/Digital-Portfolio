export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6">

                <p className="text-lg mb-4">
                    Hola, soy
                </p>

                <h1 className="text-6xl font-bold mb-6">
                    Ángel Álvarez
                </h1>

                <h2 className="text-2xl text-gray-400 mb-8">
                    Software Engineering Student
                    <br />
                    Digital Transformation &
                    Full Stack Developer
                </h2>

                <div className="flex gap-4">
                    <button className="px-6 py-3 rounded-lg bg-white text-black">
                        Ver Proyectos
                    </button>

                    <button className="px-6 py-3 rounded-lg border">
                        Descargar CV
                    </button>
                </div>

            </div>
        </section>
    );
}