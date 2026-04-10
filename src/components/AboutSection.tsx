import { Link } from "react-router-dom";
import frankImg from "@/assets/Frank.png";
import philippeImg from "@/assets/Phillippe.png";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-5">
      <div className="max-w-[1000px] mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Om oss
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: "Frank",
              img: frankImg,
              link: "/frank",
              desc: "Grundare och teknikentusiast. Passionerad om webbutveckling, AI och att bygga community kring nördkultur.",
            },
            {
              name: "Philippe",
              img: philippeImg,
              link: "/philippe",
              desc: "Medgrundare med fokus på spel, design och kreativa projekt. Brinner för att skapa mötesplatser för likasinnade.",
            },
          ].map((person) => (
            <Link
              key={person.name}
              to={person.link}
              className="glass-card rounded-2xl p-8 flex flex-col items-center group hover:-translate-y-1 transition-all no-underline"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-40 h-40 rounded-full object-cover mb-5 border-2 border-primary group-hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)] transition-shadow"
              />
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                {person.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {person.desc}
              </p>
              <span className="mt-4 text-sm text-primary font-semibold group-hover:underline">
                Läs mer →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
