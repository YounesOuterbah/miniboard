import { Control } from "./components/control/Control";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="application">
      <div className="app-nav">
        <Navbar />
      </div>
      <div className="app-body">
        <Control />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
