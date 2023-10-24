import { useState } from "react";
import { Control } from "./components/control/Control";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="application">
      <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <div className="app-body">
        <Control setMenuToggle={setMenuToggle} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
