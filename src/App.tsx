import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Pixhub from './pages/Pixhub';
import FootPassion from './pages/FootPassion';
import Animalin from './pages/Animalin';
import Frequencies from './pages/Frequencies';
import EasyUpload from './pages/EasyUpload';
import PokeCodes from './pages/PokeCodes';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="antialiased min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 transition-colors">
          <Toaster position="top-right" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pixhub" element={<Pixhub />} />
            <Route path="/footpassion" element={<FootPassion />} />
            <Route path="/animalin" element={<Animalin />} />
            <Route path="/frequencies" element={<Frequencies />} />
            <Route path="/easyupload" element={<EasyUpload />} />
            <Route path="/pokecodes" element={<PokeCodes />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;