import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import ServicesPage from "./routes/ServicesPage";
import Resources from "./routes/Resources";
import Downloads from "./routes/Downloads";
import Careers from "./routes/Careers";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/downloads" element={<Downloads />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
