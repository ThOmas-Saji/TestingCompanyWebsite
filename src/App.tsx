import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home/Home';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Services } from './pages/Home/components/Services';
import { Blog } from './pages/Home/components/Blog';
import { Team } from './pages/Home/components/Team';
import { CTA } from './pages/Home/components/CTA';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<CTA />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
