import { BrowserRouter,Routes, Route } from "react-router-dom";
// import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Enquiry from "./pages/Enquiry";

function App() {


  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
    
      <Route path='/enquiry' element={<Enquiry />} />
      
    </Routes>
    </BrowserRouter>
 
   </>
  )
}

export default App
