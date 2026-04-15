import logo from "@/assets/Lilahjärna2.png";

const Header = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 md:px-6 py-2 md:py-3 bg-background/85 backdrop-blur-md border-b border-border/30 shadow-lg shadow-background/60">
      <a href="#" className="flex items-center gap-2 md:gap-3 no-underline shrink-0">
        <img
          src={logo}
          alt="Nerdklubben logga"
          className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-lg drop-shadow-[0_0_6px_hsl(var(--neon-purple)/0.6)]"
        />
        <span className="font-bold text-xs md:text-lg tracking-wide text-primary drop-shadow-[0_0_8px_hsl(var(--neon-purple)/0.6)]">
          Nerdklubben
        </span>
      </a>

      <nav className="flex items-center gap-1 md:gap-2">
        {[
          { label: "Om oss", id: "about" },
          { label: "Anmäl dig", id: "enlist" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="px-2 md:px-3 py-2 rounded-lg font-semibold text-xs md:text-sm text-foreground/90 hover:text-primary-foreground hover:gradient-orange transition-all hover:-translate-y-0.5 hover:shadow-lg bg-transparent border-none cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="px-3 md:px-4 py-2 rounded-lg font-bold text-xs md:text-sm gradient-orange text-primary-foreground shadow-lg hover:-translate-y-0.5 transition-all border-none cursor-pointer"
        >
          Kontakta
        </button>
      </nav>
    </header>
  );
};

export default Header;
