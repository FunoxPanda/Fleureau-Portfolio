import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
    return <Router>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
}

export default App;
