import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Router() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default Router