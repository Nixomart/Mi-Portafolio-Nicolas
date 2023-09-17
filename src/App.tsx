import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Projects from "./pages/projects";
import Info from "./pages/info";

import Contact from "./pages/contact";
function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/info" element={<Info />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
