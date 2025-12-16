const OpeningSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="card-elevated p-6 sm:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-full min-h-[200px] bg-accent rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Yth. Rekan-rekan Praktisi Industri Kreatif Digital,
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Perkenalkan, saya <strong className="text-foreground">Mustofin</strong>, salah satu anggota Komunitas Agile Malang dan mahasiswa pascasarjana yang sedang menyusun penelitian tesis.
                </p>
                
                <p>
                  Penelitian ini bertujuan untuk mengkaji <strong className="text-foreground">dampak adopsi Generative Artificial Intelligence (AI)</strong> terhadap kinerja middle manager di industri kreatif digital, khususnya di wilayah Kota Malang.
                </p>
                
                <p>
                  Penelitian ini diharapkan dapat memberikan <strong className="text-foreground">insight berbasis data</strong> yang bermanfaat bagi pengembangan praktik manajerial, pengambilan keputusan, serta ekosistem digital kreatif di Malang.
                </p>
                
                <p className="pt-2 text-foreground font-medium">
                  Partisipasi Anda sebagai praktisi sangat berarti, karena pengalaman dan perspektif Anda akan menjadi dasar utama dalam menghasilkan rekomendasi yang relevan dan aplikatif bagi industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
