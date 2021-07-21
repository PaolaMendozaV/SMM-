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
import { ThemeProvider } from '@material-ui/styles';
import theme from './themeConfig'



function App() {
  return (
    
   <Router>
      < ThemeProvider theme={theme} className="App">
    {/* <div>
      <Link to= {SignInSide}>

      </Link>

    </div> */}

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
        </ThemeProvider>
    </Router>
    




  );
}

export default App;
