import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import philippeImg from "@/assets/Phillippe.png";

const PhilippePage = () => {
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
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <img
              src={philippeImg}
              alt="Philippe"
              className="w-48 h-48 rounded-full object-cover border-2 border-primary shadow-lg"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Philippe
              </h1>
              <p className="text-primary font-semibold text-lg">
                Medgrundare & Kreativ Kraft
              </p>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Philippe är medgrundare av Nerdklubben och brinner för spel, design 
              och kreativa projekt. Han har en unik förmåga att kombinera teknik 
              med kreativitet och skapa engagerande upplevelser.
            </p>
            <p>
              Med bakgrund inom speldesign och grafisk formgivning har Philippe 
              alltid strävat efter att bygga mötesplatser där kreativa människor 
              kan inspirera varandra och samarbeta.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">Karriär & Erfarenhet</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Speldesigner med fokus på indie-spel och interaktiva upplevelser</li>
              <li>Grafisk formgivare och UI/UX-designer</li>
              <li>Streamer och content creator inom gaming-communityn</li>
              <li>Eventarrangör för LAN-partyn och spelträffar</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">Visionen med Nerdklubben</h2>
            <p>
              Philippe ser Nerdklubben som en plats där passionen för spel och 
              kreativitet möts. Han vill skapa events och aktiviteter som för 
              samman likasinnade och ger alla en chans att uttrycka sin kreativitet 
              – oavsett om det är genom speldesign, streaming eller bara att spela 
              tillsammans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilippePage;
