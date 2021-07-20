import logo from './logo.svg';
import './App.css';
import Navbranch from './component/Navbranch'
import DropdownButtons from './component/DropdownButtons'
import SignInSide from './component/SingInSide';

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
