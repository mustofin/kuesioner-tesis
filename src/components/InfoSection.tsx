import { Clock, Target, Shield, BarChart3 } from "lucide-react";

const infoItems = [
  {
    icon: Clock,
    label: "Waktu pengisian",
    value: "± 8–10 menit",
  },
  {
    icon: Target,
    label: "Responden",
    value: "Middle manager di industri kreatif digital (software, startup, game, aplikasi, digital agency, IT services)",
  },
  {
    icon: Shield,
    label: "Kerahasiaan data",
    value: "Seluruh jawaban bersifat rahasia dan hanya digunakan untuk kepentingan akademik",
  },
  {
    icon: BarChart3,
    label: "Hasil penelitian",
    value: "Akan disajikan dalam bentuk laporan ringkas dan insight agregat, tanpa menyebut identitas individu atau perusahaan",
  },
];

const InfoSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="section-container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          Informasi Kuesioner
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Berikut adalah informasi penting sebelum Anda mengisi kuesioner penelitian ini
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="card-elevated p-6 group hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consent Notice */}
        <div className="mt-10 p-4 sm:p-6 rounded-xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-foreground text-sm sm:text-base">
            Dengan melanjutkan pengisian kuesioner ini, Anda menyatakan{" "}
            <strong>bersedia berpartisipasi secara sukarela</strong> dalam penelitian ini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
