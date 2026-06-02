import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contato" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary mb-8">
            <span className="h-px w-10 bg-primary" />
            Pronto para começar?
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-balance">
            Sua jornada no tiro esportivo começa agora.
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-lg">
            Agende uma visita, tire suas dúvidas ou inicie seu processo de CAC.
            Atendimento direto e sem complicação.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20uma%20visita%20ao%20Clube%20de%20Tiro%20Calibre%2012."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 text-sm uppercase tracking-widest font-semibold rounded-sm hover:bg-primary/90 transition-all"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Falar no WhatsApp
              <span>→</span>
            </a>
            <a
              href="https://www.instagram.com/clubecalibre12oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-8 py-5 text-sm uppercase tracking-widest font-medium rounded-sm hover:bg-secondary transition-colors"
            >
              @clubecalibre12oficial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
