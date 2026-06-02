import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube de Tiro Calibre 12 | Tiro esportivo, CAC e filiação" },
      {
        name: "description",
        content:
          "Clube de tiro esportivo com cursos especializados, assessoria CAC completa e filiação descomplicada. Precisão, segurança e domínio em ambiente controlado.",
      },
      { property: "og:title", content: "Clube de Tiro Calibre 12" },
      {
        property: "og:description",
        content:
          "Cursos, assessoria CAC e filiação. Tiro esportivo em ambiente seguro e profissional.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
