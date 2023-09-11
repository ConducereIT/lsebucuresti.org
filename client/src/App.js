import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Preloader from "./components/Preloader";
import { PreloaderProvider } from "./components/PreloaderProvider";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <PreloaderProvider>
      <Preloader />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membrii" element={<Home />} />
          <Route path="/evenimente" element={<Home />} />
          <Route path="/facultate" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/despre" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </PreloaderProvider>
  );
}
