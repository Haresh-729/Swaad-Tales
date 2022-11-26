import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App scrollbar-hide">
      <NavBar />
      <Card />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
