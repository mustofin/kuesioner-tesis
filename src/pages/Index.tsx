import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import OpeningSection from "@/components/OpeningSection";
import InfoSection from "@/components/InfoSection";
import BenefitsSection from "@/components/BenefitsSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kuesioner Penelitian AI - Mustofin | Tesis Pascasarjana</title>
        <meta
          name="description"
          content="Kuesioner penelitian tesis tentang dampak adopsi Generative AI terhadap kinerja middle manager di industri kreatif digital Kota Malang. Oleh Mustofin, Komunitas Agile Malang."
        />
        <meta name="author" content="Mustofin" />
        <link rel="canonical" href="https://kuesioner.mustofin.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kuesioner Penelitian AI - Mustofin" />
        <meta
          property="og:description"
          content="Penelitian tentang dampak adopsi Generative AI terhadap kinerja middle manager di industri kreatif digital Malang."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuesioner.mustofin.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kuesioner Penelitian AI - Mustofin" />
        <meta
          name="twitter:description"
          content="Penelitian tentang dampak adopsi Generative AI terhadap kinerja middle manager di industri kreatif digital Malang."
        />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <OpeningSection />
        <InfoSection />
        <BenefitsSection />
        <FormSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
