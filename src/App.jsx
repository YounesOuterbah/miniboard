import { useContext, useState } from "react";
import { Control } from "./components/control/Control";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";
// import { CalendarPage } from "./pages/calendar/CalendarPage.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      <div className={theme === "light" ? "application" : "application dark"}>
        <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        <div className="app-body">
          <Control setMenuToggle={setMenuToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/calendar" element={<CalendarPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
