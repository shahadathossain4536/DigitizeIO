import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Pages/Shared/Navbar";
import Footer from "./component/Pages/Shared/Footer";
import Home from "./component/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Pages/Auth/Login";
import Reg from "./component/Pages/Auth/Reg";
import NotFound from "./component/Pages/Shared/NotFound";
import ForgetPassword from "./component/Pages/Auth/ForgetPassword";
import Contact from "./component/Pages/Contact/Contact";
import About from "./component/Pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reg" element={<Reg />}></Route>
      <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
