import { motion } from "framer-motion";

const items = [
  {
    quote: "Minha experiência com o Clube de Tiro Calibre 12 superou todas as expectativas. Aprendizado valioso em ambiente seguro.",
    name: "André Silva",
    role: "Atirador · Membro Premium",
  },
  {
    quote: "Profissionalismo e atenção aos detalhes fazem do clube o melhor lugar para praticar e se aperfeiçoar.",
    name: "Mariana Souza",
    role: "Instrutora Certificada",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 md:py-40 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary mb-5">
            <span className="h-px w-10 bg-primary" />
            Quem treina, recomenda
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black max-w-3xl text-balance">
            Relatos de quem confia no nosso trabalho.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 md:p-10 bg-card border border-border rounded-md"
            >
              <span className="absolute top-6 right-8 font-display text-7xl text-primary/30 leading-none">"</span>
              <blockquote className="text-lg md:text-xl font-display leading-snug text-balance">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
