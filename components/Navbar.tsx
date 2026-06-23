export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <h1 className="font-bold text-xl">
                    Ángel Álvarez
                </h1>

                <div className="flex gap-6">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}