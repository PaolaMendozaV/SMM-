import logo from './logo.svg';
import './App.css';
import Navbranch from './component/Navbranch'
import DropdownButtons from './component/DropdownButtons'
import ReservationButton from './component/ReservationButton';
import Calendar from './component/Calendar';

function App() {
  return (
    <div className="App">
      <Navbranch/>
      <DropdownButtons/>
      <Calendar/>
      <ReservationButton/>
    </div>
  );
}

export default App;
