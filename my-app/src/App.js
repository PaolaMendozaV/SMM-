import logo from './logo.svg';
import './App.css';
import Navbranch from './component/Navbranch'
import DropdownButtons from './component/DropdownButtons'
import SignInSide, {Button} from './component/SingInSide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SignInSide/>
      <Navbranch/>
      <DropdownButtons/>
    </div>
  );
}

export default App;
