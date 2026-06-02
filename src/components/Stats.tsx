import { motion } from "framer-motion";

const stats = [
  { v: "500+", l: "Atiradores filiados" },
  { v: "100%", l: "CACs regularizados" },
  { v: "24/7", l: "Suporte ao membro" },
  { v: "10+", l: "Anos de experiência" },
];

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-5xl md:text-6xl font-black text-primary leading-none">
              {s.v}
            </div>
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
