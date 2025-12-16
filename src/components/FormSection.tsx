import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormSection = () => {
  // Replace this URL with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";
  const googleFormDirectUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <section id="form" className="py-16 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Isi Kuesioner
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Silakan isi kuesioner di bawah ini. Estimasi waktu pengisian ± 8–10 menit.
          </p>
          
          {/* Open in new tab button */}
          <a
            href={googleFormDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm mb-8"
          >
            <ExternalLink className="w-4 h-4" />
            Buka di tab baru
          </a>
        </div>

        {/* Google Form Embed Container */}
        <div className="card-elevated overflow-hidden">
          <div className="bg-primary/5 p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-green-success/60" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">
                Google Forms - Kuesioner Penelitian
              </span>
            </div>
          </div>
          
          {/* Placeholder for Google Form - Replace the src with your actual form URL */}
          <div className="relative bg-card">
            {/* Placeholder State - Remove this when you have the actual form URL */}
            <div className="min-h-[600px] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ArrowRight className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Google Form akan ditampilkan di sini
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mb-6">
                Ganti URL form di komponen FormSection.tsx dengan URL Google Form Anda yang sebenarnya
              </p>
              <code className="text-xs bg-muted px-4 py-2 rounded-lg font-mono text-muted-foreground">
                src/components/FormSection.tsx
              </code>
            </div>

            {/* Uncomment this iframe when you have the actual Google Form URL */}
            {/* 
            <iframe
              src={googleFormUrl}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Kuesioner Penelitian"
            >
              Memuat…
            </iframe>
            */}
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Mengalami kendala dengan form di atas?
          </p>
          <Button
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={googleFormDirectUrl} target="_blank" rel="noopener noreferrer">
              Buka Kuesioner di Google Forms
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
