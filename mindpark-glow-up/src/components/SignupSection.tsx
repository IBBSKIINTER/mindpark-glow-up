import { useState } from "react";

const SignupSection = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const event = (form.elements.namedItem("event") as HTMLSelectElement).value;

    if (!name || !email) {
      setMsg("Fyll i namn och e-post.");
      return;
    }
    setMsg(`Tack ${name}! Du är anmäld till "${event}".`);
    form.reset();
  };

  const inputClasses =
    "w-full px-3 py-2.5 rounded-lg bg-muted/20 border border-border/40 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors";

  return (
    <section id="enlist" className="min-h-screen flex items-center py-24 px-5">
      <div className="max-w-[700px] mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Anmäl dig
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Fyll i formuläret för att anmäla dig till kommande möten och events.
        </p>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 md:p-10 flex flex-col gap-5 text-left"
        >
          <label className="flex flex-col gap-1.5 font-semibold text-foreground text-sm">
            Namn
            <input name="name" type="text" required placeholder="Ditt namn" className={inputClasses} />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-foreground text-sm">
            Företag
            <input name="company" type="text" placeholder="Företagsnamn" className={inputClasses} />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-foreground text-sm">
            E-post
            <input name="email" type="email" required placeholder="namn@foretag.se" className={inputClasses} />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-foreground text-sm">
            Vad behöver ni hjälp med?
            <select name="event" required className={inputClasses}>
              <option value="">Välj område</option>
              <option>Veckomöte: Teknik & Diskussion</option>
              <option>Workshop: Webbutveckling</option>
              <option>Meetup: Spel & Design</option>
            </select>
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-foreground text-sm">
            Meddelande
            <textarea name="message" rows={3} placeholder="Beskriv kort ert behov..." className={`${inputClasses} resize-y min-h-[80px]`} />
          </label>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-bold gradient-orange text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all border-none cursor-pointer text-base mt-2"
          >
            Skicka
          </button>
          {msg && <p className="text-secondary text-sm mt-1">{msg}</p>}
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
