import { useState } from 'react';
import { supabase } from './supabase';

function Iletisim() {
  const [isim, setIsim] = useState('');
  const [telefon, setTelefon] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [gonderildi, setGonderildi] = useState(false);
  const [hata, setHata] = useState('');

  async function formGonder() {
    setHata('');

    if (isim.trim() === '') {
      setHata('Lütfen adınızı girin.');
      return;
    }

    if (telefon.trim() === '') {
      setHata('Lütfen telefon numaranızı girin.');
      return;
    }

    const telefonRegex = /^[0-9\s]{10,11}$/;
    if (!telefonRegex.test(telefon)) {
      setHata('Lütfen geçerli bir telefon numarası girin (sadece rakam).');
      return;
    }

    if (mesaj.trim() === '') {
      setHata('Lütfen mesajınızı girin.');
      return;
    }

    const { error } = await supabase
      .from('mesajlar')
      .insert([{ isim, telefon, mesaj }]);

    if (!error) {
      setGonderildi(true);
      setIsim('');
      setTelefon('');
      setMesaj('');
    } else {
      setHata('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  }

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">İletişim</h2>
        <p className="text-center text-slate-400 mb-10">Bize ulaşın, en kısa sürede dönüş yapalım.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-orange-500 mb-2">Telefon</h3>
              <a href="tel:02584105020" className="text-white hover:text-orange-500 transition">0258 410 50 20</a>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="font-bold text-orange-500 mb-2">Çalışma Saatleri</h3>
              <p className="text-slate-400">Hafta içi & Cumartesi</p>
              <p className="text-white">08:30 — 19:00</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="font-bold text-orange-500 mb-4 text-xl">Mesaj Gönder</h3>
            {gonderildi ? (
              <p className="text-green-400 text-center py-8">✅ Mesajınız alındı, en kısa sürede dönüş yapacağız!</p>
            ) : (
              <div className="space-y-4">
                {hata && (
                  <p className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm">
                    ⚠️ {hata}
                  </p>
                )}
                <input
  type="text"
  placeholder="Adınız"
  value={isim}
  onChange={e => { setIsim(e.target.value); setHata(''); }}
  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
/>
                <input
  type="text"
  placeholder="Telefon"
  value={telefon}
  onChange={e => { setTelefon(e.target.value); setHata(''); }}
  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
/>
               <textarea
  placeholder="Mesajınız"
  value={mesaj}
  onChange={e => { setMesaj(e.target.value); setHata(''); }}
  rows={4}
  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
/>
                <button
                  onClick={formGonder}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
                >
                  Gönder 📨
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-slate-500 mt-10 text-sm">© 2026 Aybek Teknik Servis</p>
    </section>
  );
}


export default Iletisim;