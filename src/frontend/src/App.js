import Header from './components/header';
import Footer from './components/footer';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx';
import Contact from './pages/Contact.jsx';
import Space from './pages/Space.jsx';
import ComingSoon from './pages/ComingSoon';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

import './styles/App.css';
//import './styles/scrollbar.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="/space" element={<Space />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      <Footer />
      </Router>  
    </div>
  );
}

export default App;
