// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import NavBar from './components/nav';
function App() {
  return (
   <>
   <NavBar />
   <Home />
   <About />

   <SocialLinks />
   </> 
  );
}

export default App;
