
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Strategy from './Components/Strategy/Strategy';

function App() {
  return (
    <div className="App bg-gray-200">
        <Home></Home>
        <About></About>
        <Strategy></Strategy>
        <Contact></Contact>
    </div>
  );
}

export default App;
