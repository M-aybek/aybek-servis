function Iletisim() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">İletişim</h2>
        <p className="text-center text-slate-400 mb-10">Bize ulaşın, en kısa sürede dönüş yapalım.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-orange-500 mb-2">Telefon</h3>
            <a href="tel:02584105020" className="text-white hover:text-orange-500 transition">0258 410 50 20</a>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl mb-3">🕐</div>
            <h3 className="font-bold text-orange-500 mb-2">Çalışma Saatleri</h3>
            <p className="text-slate-400">Hafta içi & Cumartesi</p>
            <p className="text-white">08:30 — 19:00</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-orange-500 mb-2">Konum</h3>
            <p className="text-slate-400">Denizli</p>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-500 mt-10 text-sm">© 2026 Aybek Teknik Servis</p>
    </section>
  );
}

export default Iletisim;