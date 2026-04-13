import logo from "@/assets/logo.png";
console.log("HEADER LOADED");
const Header = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2 bg-background/85 backdrop-blur-md border-b border-border/30 shadow-lg">
      <a href="#" className="flex items-center gap-1.5 no-underline group shrink-0 min-w-0">
        <img
          src={logo}
          alt="Nerdklubben logga"
          className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-lg drop-shadow-[0_0_6px_hsl(var(--neon-purple)/0.6)] group-hover:scale-105 transition-transform shrink-0"
        />
        <span className="font-bold text-xs md:text-lg tracking-wide truncate">
          Nerdklubben
        </span>
      </a>

      <nav className="flex items-center gap-1">
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
          className="px-3 md:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm text-foreground/90 hover:text-primary-foreground hover:gradient-orange transition-all hover:-translate-y-0.5 hover:shadow-lg bg-transparent border-none cursor-pointer"
        >
          Kontakta
        </button>
      </nav>
    </header>
  );
};

export default Header;
