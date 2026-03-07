import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import About from "./components/About";
import Case_study from "./components/Case-study"; 
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<Case_study/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
