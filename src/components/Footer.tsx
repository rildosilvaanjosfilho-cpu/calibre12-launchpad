export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="font-display font-bold uppercase tracking-widest text-foreground">Clube Calibre 12</span>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest">
          <a href="https://www.clubecalibre12.com.br" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            Site oficial
          </a>
          <a href="https://www.instagram.com/clubecalibre12oficial" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <span>© {new Date().getFullYear()} Calibre 12</span>
        </div>
      </div>
    </footer>
  );
}
