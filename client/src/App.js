import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Membrii from './views/Membrii';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membrii" element={<Home />} />
        <Route path="/evenimente" element={<Home />} />
        <Route path="/facultate" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/despre" element={<Home />} />
      </Routes>
    </Router>
  );
}
