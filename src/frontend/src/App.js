import Header from './components/header';
import Footer from './components/footer';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx';
import Contact from './pages/Contact.jsx';
import ComingSoon from './pages/ComingSoon';

import './styles/App.css';
//import './styles/scrollbar.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="/sign-up" element={<ComingSoon />} />
          <Route path="/login" element={<ComingSoon />} />
        </Routes>
      <Footer />
      </Router>  
    </div>
  );
}

export default App;
