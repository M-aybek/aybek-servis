import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Hizmetler from './Hizmetler';
import NedenBiz from './NedenBiz';
import Iletisim from './Iletisim';
import Hakkimda from './Hakkimda';
function Anasayfa() {
  return (
    <div>
      <Hizmetler />
      <NedenBiz />
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;