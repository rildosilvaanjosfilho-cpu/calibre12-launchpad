import { motion } from "framer-motion";

const items = [
  { t: "Ambiente controlado", d: "Espaço projetado para a prática segura, com protocolos rigorosos e equipamentos certificados." },
  { t: "Instrutores credenciados", d: "Profissionais com formação completa e experiência comprovada no tiro esportivo." },
  { t: "Documentação ágil", d: "Equipe especializada para conduzir todo o processo de CAC com transparência." },
  { t: "Comunidade ativa", d: "Eventos, competições internas e networking entre atiradores de diferentes níveis." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:sticky md:top-28"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary mb-5">
              <span className="h-px w-10 bg-primary" />
              Por que Calibre 12
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-balance leading-[0.95]">
              Tradição, técnica e responsabilidade em cada disparo.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Mais do que um clube — um ecossistema completo para quem leva o
              tiro esportivo a sério.
            </p>
          </motion.div>

          <div className="space-y-px bg-border">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background p-8 hover:bg-secondary transition-colors"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-sm text-primary tracking-widest">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {it.t}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
