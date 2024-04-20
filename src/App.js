// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import NavBar from './components/nav';
import Portfolio from './components/Portfolio';
function App() {
  return (
   <>
   <NavBar />
   <Home />
   <About />
   <Portfolio />

   <SocialLinks />
   </> 
  );
}

export default App;
