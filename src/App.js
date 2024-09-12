import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import WeeklySpecial from './components/WeeklySpecial';
import Contactus from './components/Contactus';

function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <Menu/>
    <WeeklySpecial/>
    <Contactus/>
    <div className="text-center my-3">Copyright &copy; 2024, Dessert Lover </div>
    </>
  );
  
}

export default App;
