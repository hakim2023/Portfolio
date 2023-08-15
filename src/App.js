
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Banner from './components/Banner'

function App() {

  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/"  index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

