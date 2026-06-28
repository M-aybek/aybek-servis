function NedenBiz() {
  const nedenler = [
    { icon: "⭐", baslik: "Deneyimli Ekip", aciklama: "Yıllarca süren deneyimimizle güvenilir hizmet sunuyoruz." },
    { icon: "⚡", baslik: "Hızlı Servis", aciklama: "Aynı gün tamir garantisi ile zaman kaybetmiyorsunuz." },
    { icon: "🔒", baslik: "Garantili Tamir", aciklama: "Tüm tamirlerimiz garantili, gönül rahatlığıyla teslim ediyoruz." },
    { icon: "💰", baslik: "Uygun Fiyat", aciklama: "Kaliteli hizmeti uygun fiyatlarla sunuyoruz." },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Neden Biz?</h2>
        <p className="text-center text-slate-500 mb-10">Müşteri memnuniyeti önceliğimizdir.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nedenler.map((neden, i) => (
            <div key={i} className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition">
              <div className="text-4xl mb-3">{neden.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{neden.baslik}</h3>
              <p className="text-slate-500 text-sm">{neden.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NedenBiz;