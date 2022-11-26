import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App scrollbar-hide">
      <Routes>
        <Route path="/" element={[<NavBar/>, <Home />]} />
        <Route path="/menu" element={[<NavBar />, <Card />]} />
        <Route path="/cart/:id" element={[<NavBar />, <CardDetails />]} />
      </Routes>
    </div>
  );
}

export default App;
