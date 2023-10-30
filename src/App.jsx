import { useState } from "react";
import { Control } from "./components/control/Control";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <Router>
      <div className="application">
        <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        <div className="app-body">
          <Control setMenuToggle={setMenuToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
