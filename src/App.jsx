import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
