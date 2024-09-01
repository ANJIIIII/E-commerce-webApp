import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import  Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
        <div className="bg-[#273232]">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <div>
       <Footer/>
        </div>
    </div>
   
  );
};

export default App;
