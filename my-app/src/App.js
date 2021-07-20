import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
import Navbranch from './component/Navbranch'
import DropdownButtons from './component/DropdownButtons'
>>>>>>> ea0d901d4ac2ffb4122c767ab6ec1792a32e3922

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
=======
      <Navbranch/>
      <DropdownButtons/>
>>>>>>> ea0d901d4ac2ffb4122c767ab6ec1792a32e3922
    </div>
  );
}

export default App;
