import HomePage from "./landind_page/home/HomePage"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./landind_page/signup/SignUp"
import AboutPage from "./landind_page/about/AboutPage"
import ProductPage from "./landind_page/products/ProductPage"
import PricingPage from "./landind_page/pricing/PricingPage"
import SupportPage from "./landind_page/support/SupportPage"
import Navbar from "./landind_page/Navbar";
import Footer from "./landind_page/Footer";
import NotFound from "./landind_page/NotFound";
function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </>
  )
}

export default App
