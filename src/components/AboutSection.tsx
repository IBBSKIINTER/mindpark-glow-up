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
              desc: "Grundare och teknikentusiast. Passionerad om webbutveckling, AI och att bygga community kring nördkultur.",
            },
            {
              name: "Philippe",
              img: philippeImg,
              desc: "Medgrundare med fokus på spel, design och kreativa projekt. Brinner för att skapa mötesplatser för likasinnade.",
            },
          ].map((person) => (
            <div key={person.name} className="glass-card rounded-2xl p-8 flex flex-col items-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-40 h-40 rounded-full object-cover mb-5 border-2 border-primary"
              />
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                {person.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
