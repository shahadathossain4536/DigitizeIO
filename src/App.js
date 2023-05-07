import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Pages/Shared/Navbar";
import Footer from "./component/Pages/Shared/Footer";
import Home from "./component/Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
