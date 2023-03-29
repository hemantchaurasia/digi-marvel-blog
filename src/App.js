import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home';
import { AboutUS } from './pages/AboutUS';
import { Articles } from './pages/Articles';

function App() {

  return (
   <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUS">AboutUS</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUS' element={<AboutUS />} />
          <Route exact path='/articles' element={<Articles />} />
        </Routes>
    </div>
     );
}

export default App;
