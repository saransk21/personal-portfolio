import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about/About';
import Footer from './components/footer/Footer';
function App() {
  return (

    <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
