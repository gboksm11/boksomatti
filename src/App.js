import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import News from './pages/News';
import Products from './pages/Products';
import Technical from './pages/Technical';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/technical" element={<Technical/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
