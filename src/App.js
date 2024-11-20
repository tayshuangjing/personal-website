import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Project } from './components/Project';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
