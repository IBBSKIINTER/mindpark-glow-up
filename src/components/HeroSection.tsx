import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(7,10,18,0.55), rgba(7,10,18,0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="glass-card rounded-2xl p-8 md:p-14 md:pl-14 max-w-[700px] shadow-[0_0_20px_hsl(var(--neon-purple)/0.4)] border border-primary/30">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            Vad är Nerdklubben?
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-[560px] leading-relaxed">
            Nerdklubben är en plats för dig som vill fördjupa dig i teknik, spel
            och nörderi tillsammans med andra. Här möts vi, lär oss och har kul!
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => scrollTo("enlist")}
              className="px-6 py-3 rounded-xl font-bold gradient-orange text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all border-none cursor-pointer text-base"
            >
              Kom igång
            </button>
            <button
              onClick={() => navigate("/las-mer")}
              className="px-6 py-3 rounded-xl font-bold bg-transparent text-secondary border border-secondary/20 hover:bg-secondary/10 hover:-translate-y-0.5 transition-all cursor-pointer text-base"
            >
              Läs mer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
