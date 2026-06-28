function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-orange-500">🔧 Aybek Teknik Servis</h1>
          <p className="text-slate-400 text-sm">Profesyonel Tamir & Bakım Hizmetleri</p>
        </div>
        <a href="tel:02584105020" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-semibold">
          📞 0258 410 50 20
        </a>
      </div>
    </header>
  );
}

export default Header;