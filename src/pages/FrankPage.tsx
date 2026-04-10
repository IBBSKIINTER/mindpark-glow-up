import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import frankImg from "@/assets/Frank.png";

const FrankPage = () => {
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
              src={frankImg}
              alt="Frank"
              className="w-48 h-48 rounded-full object-cover border-2 border-primary shadow-lg"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Frank
              </h1>
              <p className="text-primary font-semibold text-lg">
                Grundare & Teknikentusiast
              </p>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Frank är grundaren av Nerdklubben och har en djup passion för teknik, 
              webbutveckling och AI. Med över 10 års erfarenhet inom techbranschen 
              har han arbetat med allt från frontend-utveckling till maskininlärning.
            </p>
            <p>
              Hans resa började med att bygga enkla hemsidor som tonåring, och har 
              sedan dess utvecklats till att inkludera komplexa fullstack-applikationer, 
              AI-drivna lösningar och community-byggande projekt.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">Karriär & Erfarenhet</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fullstack-utvecklare med fokus på React, TypeScript och Node.js</li>
              <li>Erfarenhet inom AI och maskininlärning</li>
              <li>Community-byggare och eventarrangör inom tech</li>
              <li>Mentor för unga utvecklare</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground pt-4">Visionen med Nerdklubben</h2>
            <p>
              Frank startade Nerdklubben med visionen att skapa en inkluderande plats 
              där teknikintresserade kan mötas, lära sig och växa tillsammans. Han 
              tror starkt på att kunskap ska delas fritt och att de bästa idéerna 
              uppstår i gemenskap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrankPage;
