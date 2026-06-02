import { motion } from "framer-motion";
import heroShell from "@/assets/hero-shell.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroShell}
          alt="Munição calibre 12"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-48 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary mb-8"
        >
          <span className="h-px w-10 bg-primary" />
          Clube de Tiro Esportivo
        </motion.div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] max-w-4xl text-balance">
          {"Precisão.".split("").map((c, i) => (
            <motion.span
              key={`p-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.03, duration: 0.5 }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block text-primary"
          >
            Segurança.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="inline-block"
          >
            Domínio.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Promovemos a prática do tiro esportivo em ambiente seguro, com cursos
          especializados, assessoria completa para CAC e filiação descomplicada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm uppercase tracking-widest font-semibold rounded-sm hover:bg-primary/90 transition-all"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Agendar visita
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-3 border border-border px-7 py-4 text-sm uppercase tracking-widest font-medium rounded-sm hover:bg-secondary transition-colors"
          >
            Conheça o clube
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-6 right-6 flex justify-between items-end text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-widest">Role para descobrir</span>
          </div>
          <div className="hidden md:block uppercase tracking-widest">
            Brasil · CAC · IGP · Exército
          </div>
        </motion.div>
      </div>
    </section>
  );
}
