import Header from './components/header';
import Footer from './components/footer';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx';
import Contact from './pages/Contact.jsx';
import Space from './pages/Space.jsx';
import History from './pages/History.jsx';
import ComingSoon from './pages/ComingSoon';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Impressum from './pages/Impressum.jsx';
import Hausordnung from './pages/Hausordnung.jsx';
import AGB from './pages/ABG.jsx';
import Dataprotaction from './pages/Dataprotection.jsx'
import Team from './pages/Team.jsx';
import Quellen from './pages/Quellen.jsx';
import Horoskope from './pages/Horoskope.jsx';

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
          <Route path="/history" element={<History />} />
          <Route path="/horoskope" element={<Horoskope />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/hausordnung" element={<Hausordnung />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/dataprotection" element={<Dataprotaction />} />
          <Route path="/team" element={<Team />} />
          <Route path="/quellen" element={<Quellen />} />
        </Routes>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
