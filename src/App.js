import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Pages/Shared/Navbar";
import Footer from "./component/Pages/Shared/Footer";
import Home from "./component/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Pages/Auth/Login";
import Reg from "./component/Pages/Auth/Reg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reg" element={<Reg />}></Route>
    </Routes>
  );
}

export default App;
