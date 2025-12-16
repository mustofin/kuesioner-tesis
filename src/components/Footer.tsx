import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-primary-foreground font-display font-semibold">
              Mustofin
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Mahasiswa Pascasarjana • Komunitas Agile Malang
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://mustofin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            >
              mustofin.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Mustofin. Penelitian ini dilakukan untuk kepentingan akademik.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
