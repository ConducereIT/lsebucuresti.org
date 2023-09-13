import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// View
import Home from "./views/Home.view";
import Echipa from "./views/Echipa.view";
import Evenimente from "./views/Evenimente.view";
import Facultate from "./views/Facultate.view";
import Faq from "./views/Faq.view";
import Contact from "./views/Contact.view";
import Despre from "./views/Despre.view";

//Components
import Preloader from "./components/Preloader.component";
import { PreloaderProvider } from "./components/PreloaderProvider.component";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <PreloaderProvider>
      <Preloader />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membrii" element={<Echipa />} />
          <Route path="/evenimente" element={<Evenimente />} />
          <Route path="/facultate" element={<Facultate />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </PreloaderProvider>
  );
}
