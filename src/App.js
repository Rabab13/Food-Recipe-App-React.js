import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
// import backgroundImage from "./static/images/bg.jpg";

function App() {
  return (
    <div>
      <div className="min-h-screen  bg-white text-gray-600 text-lg">
      {/* <div style={{ backgroundImage: `url(${backgroundImage})` }}> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
    // </div>
  );
}

export default App;