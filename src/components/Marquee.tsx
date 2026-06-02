const items = [
  "Tiro Esportivo",
  "Assessoria CAC",
  "Cursos Certificados",
  "Ambiente Controlado",
  "Instrutores Credenciados",
  "Filiação Imediata",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-muted-foreground hover:text-primary transition-colors">
              {item}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
