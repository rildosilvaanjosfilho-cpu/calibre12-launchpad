import { motion } from "framer-motion";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm uppercase">Calibre 12</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://api.whatsapp.com/send/?phone=5521964848187&text&type=phone_number&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-widest font-medium bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
        >
          Filie-se
        </a>
      </div>
    </motion.header>
  );
}
