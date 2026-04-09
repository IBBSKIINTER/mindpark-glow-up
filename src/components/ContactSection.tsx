import { Mail, Instagram, Phone } from "lucide-react";

const contacts = [
  { icon: Mail, title: "E-post", value: "kontakt@nerdklubben.example" },
  { icon: Instagram, title: "Instagram", value: "@Nerdklubben" },
  { icon: Phone, title: "Telefon", value: "123456789" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Kontakta oss
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[900px] justify-center">
        {contacts.map((c) => (
          <div
            key={c.title}
            className="glass-card rounded-2xl p-8 flex-1 flex flex-col items-center text-center min-h-[200px] justify-center"
          >
            <c.icon className="w-9 h-9 text-primary mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm break-all">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
