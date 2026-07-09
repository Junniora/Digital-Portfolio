import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ángel Álvarez | Software Engineer",
  description:
    "Portfolio de Ángel Álvarez, estudiante de Ingeniería en Tecnologías de Software especializado en desarrollo Full Stack y transformación digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/20 selection:text-blue-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}