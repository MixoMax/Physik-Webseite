import Header from './components/header';
import Footer from './components/footer';

import './styles/App.css';
import './styles/scrollbar.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
