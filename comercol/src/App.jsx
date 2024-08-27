import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
