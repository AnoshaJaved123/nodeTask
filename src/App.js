import logo from './logo.svg';
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './Main'

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/main' element={<Main/>}/>
    </Routes>
  </Router>
  );
}

export default App;
