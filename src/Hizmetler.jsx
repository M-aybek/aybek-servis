function Hizmetler() {
  const hizmetler = [
    { icon: "🫧", baslik: "Beyaz Eşya Tamiri", aciklama: "Çamaşır makinesi, bulaşık makinesi, buzdolabı ve tüm beyaz eşya tamiri." },
    { icon: "⚡", baslik: "Elektronik Tamir", aciklama: "Her türlü elektronik cihaz arıza tespiti ve tamiri." },
    { icon: "💳", baslik: "Kart Tamiri", aciklama: "Elektronik kart tamiri ve komponent değişimi." },
    { icon: "🏆", baslik: "Yetkili Servis", aciklama: "Alveus, Alpina ve Goodwest markaları yetkili servisi." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Hizmetlerimiz</h2>
        <p className="text-center text-slate-500 mb-10">Profesyonel ekibimizle tüm tamir ihtiyaçlarınız için yanınızdayız.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hizmetler.map((hizmet, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{hizmet.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{hizmet.baslik}</h3>
              <p className="text-slate-500">{hizmet.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hizmetler;