
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Skill from './Components/Skill.jsx/Skill';
import Strategy from './Components/Strategy/Strategy';
function App() {
  return (
    <div className="App">
        <Home></Home>
        {/* <About></About> */}
        <Skill></Skill>
        <Strategy></Strategy>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
