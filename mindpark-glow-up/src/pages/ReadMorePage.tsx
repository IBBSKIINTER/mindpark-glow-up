import { Link } from "react-router-dom";
import { ArrowLeft, Users, Gamepad2, Code, Heart } from "lucide-react";

const ReadMorePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[800px] mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till startsidan
        </Link>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Om Nerdklubben
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Nerdklubben är en community för alla som brinner för teknik, spel och 
            nördkultur. Vi grundades av Frank och Philippe med en enkel idé: att 
            skapa en mötesplats där passionerade människor kan samlas, dela kunskap 
            och ha kul tillsammans.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Users,
                title: "Community",
                desc: "En aktiv och engagerad gemenskap av teknik- och spelentusiaster som stödjer varandra.",
              },
              {
                icon: Gamepad2,
                title: "Events & Spelkvällar",
                desc: "Regelbundna LAN-partyn, spelkvällar och tech-meetups för alla nivåer.",
              },
              {
                icon: Code,
                title: "Lärande & Utveckling",
                desc: "Workshops, hackathons och kunskapsdelning inom programmering, AI och teknik.",
              },
              {
                icon: Heart,
                title: "Inkludering",
                desc: "En öppen och välkomnande plats för alla oavsett erfarenhet eller bakgrund.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-foreground mb-4">Vår historia</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nerdklubben startade som en liten grupp vänner som träffades 
              regelbundet för att spela, koda och diskutera teknik. Det som 
              började som informella träffar växte snabbt till något större.
            </p>
            <p>
              Idag är Nerdklubben en växande community med medlemmar från hela 
              Sverige som delar samma passion för nördkultur. Vi anordnar allt 
              från kodningsworkshops och AI-föreläsningar till spelkvällar och 
              LAN-partyn.
            </p>
            <p>
              Vår vision är att bli den ledande mötesplatsen för teknik- och 
              spelintresserade i Norden – en plats där alla är välkomna att 
              lära sig, skapa och ha kul.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/frank"
              className="px-6 py-3 rounded-xl font-bold gradient-orange text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
            >
              Läs om Frank
            </Link>
            <Link
              to="/philippe"
              className="px-6 py-3 rounded-xl font-bold gradient-orange text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
            >
              Läs om Philippe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMorePage;
