import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './components/card';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Cardapio from './pages/cardapio';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Card/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardapio" element={<Cardapio/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App