import { FileText, Zap, CalendarCheck, Heart } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Laporan Insight",
    description: '"State of AI Adoption in Malang\'s Digital Creative Industry (2025)"',
  },
  {
    icon: Zap,
    title: "Akses Awal Hasil Penelitian",
    description: "Dapat digunakan sebagai bahan benchmarking dan pengambilan keputusan manajerial",
  },
  {
    icon: CalendarCheck,
    title: "Prioritas Undangan Event",
    description: "Workshop dan event Komunitas Agile Malang (jika tersedia)",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Apresiasi Partisipasi
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Manfaat Partisipasi Anda
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sebagai bentuk apresiasi atas kontribusi Anda, responden akan memperoleh:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center group hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contribution Note */}
        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <Heart className="w-5 h-5 text-accent flex-shrink-0" />
          <p className="text-muted-foreground text-sm sm:text-base">
            Partisipasi Anda juga merupakan <strong className="text-foreground">kontribusi nyata</strong> dalam membangun data dan pengetahuan bagi ekosistem digital Malang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
