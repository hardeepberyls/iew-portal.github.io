import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Sale from "./pages/Sale";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Quotation from "./pages/Quotation";
import Purchase from "./pages/Purchase";
import Performa from "./pages/Performa";
import Eway from "./pages/Eway";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/pi" element={<Performa />} />
        <Route path="/eway" element={<Eway />} />
      </Routes>
    </div>
  );
}

export default App;
