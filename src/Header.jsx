import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-orange-500">🔧 Aybek Teknik Servis</h1>
          <p className="text-slate-400 text-xs md:text-sm">Profesyonel Tamir & Bakım Hizmetleri</p>
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          <Link to="/" className="text-white hover:text-orange-500 transition text-sm md:text-base">Anasayfa</Link>
          <Link to="/hakkimda" className="text-white hover:text-orange-500 transition text-sm md:text-base">Hakkimizda</Link>
          <Link to="/iletisim" className="text-white hover:text-orange-500 transition text-sm md:text-base">İletişim</Link>
          <a href="tel:02584105020" className="bg-orange-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-orange-600 transition font-semibold text-sm md:text-base whitespace-nowrap">
            📞 0258 410 50 20
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;