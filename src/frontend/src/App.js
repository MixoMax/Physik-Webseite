import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import './styles/App.css';
import './styles/scrollbar.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
        
      <Footer />
    </div>
  );
}

export default App;
