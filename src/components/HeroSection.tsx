import { GraduationCap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-soft rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            Penelitian Tesis
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground text-center leading-tight mb-6 animate-fade-in-up">
          Kuesioner Penelitian
          <span className="block mt-2 text-accent">Adopsi Generative AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-primary-foreground/80 text-center text-lg max-w-2xl mx-auto mb-8 animate-fade-in-delay-1">
          Dampak terhadap Kinerja Middle Manager di Industri Kreatif Digital Kota Malang
        </p>

        {/* Author Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-in-delay-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">M</span>
            </div>
            <div className="text-left">
              <p className="text-primary-foreground font-semibold">Mustofin</p>
              <p className="text-primary-foreground/60 text-sm">Mahasiswa Pascasarjana</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-primary-foreground/20" />
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Users className="w-5 h-5" />
            <span className="text-sm">Komunitas Agile Malang</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
