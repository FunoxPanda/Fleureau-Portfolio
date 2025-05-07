import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
    // On doit être le 24 décembre 2024 pour que ça fonctionne
    return <Router basename={"/margauxfleureau"}>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
}

export default App;
