import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Enquiry from "./pages/Enquiry";

function App() {


  return (
    <>
   <Navbar />
   <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/enquiry" element={<Enquiry />} />
   </Routes>
   </>
  )
}

export default App
