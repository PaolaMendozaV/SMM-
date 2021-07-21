import "./App.css";
import Navbranch from "./component/Navbranch";
//import DropdownButtons from "./component/DropdownButtons";
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
//import ReservationButton from './component/ReservationButton';
//import Calendar from './component/Calendar';
import Selector from './component/Selector'



function App() {
  return (
    
   <Router>
      {/*< ThemeProvider theme={theme} className="App">*/}
    {/* <div>
      <Link to= {SignInSide}>

      </Link>

    </div> */}
      <div className="App">
        <Switch>
          <Route path="/" exact>
          < ThemeProvider theme={theme}>
            <SignInSide/>
          </ThemeProvider>
          </Route>
          <Route path="/start">
            <Navbranch />
            
            <Selector/>

          </Route>
          <Route path="/reservation"></Route>
        </Switch>
        {/*</ThemeProvider>*/}
        </div>
    </Router>
    


  );
}

export default App;
