import logo from "./logo.svg";
import "./App.css";
import Navbranch from "./component/Navbranch";
import DropdownButtons from "./component/DropdownButtons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SignInSide from './component/SingInSide';

function App() {
  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route path="/" exact>
          <SignInSide/>
          </Route>
          <Route path="/start">
            <Navbranch />
            <DropdownButtons />
          </Route>
          <Route path="/reservation"></Route>
        </Switch>
      </div>
    </Router>




  );
}

export default App;
