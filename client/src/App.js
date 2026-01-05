import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from "./components/header";

import Home from './pages/Home';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';
import FoodDetails from './pages/FoodDetails';
import Dashoard from './pages/Dashoard';
import Footer from './components/Footer';
import foodCard from './components/foodCard';


function App() {
  return (
    <Router>
      
      <Header />
       
       
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/fooddetails" element={<FoodDetails />} />
          <Route path="/dashboard" element={<Dashoard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        
      </main>
      <Footer/>
    </Router>
    
  );
}

export default App;



