import { Route, Routes } from 'react-router-dom';
import './App.css';
import PopUnder from './components/Home/AdFormate/PopUnder';
import Home from './components/Home/Home';
import NastedHome from './components/Home/Nasted/NastedHome';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar1';

function App() {
  return (
    <div>
      <Navbar> </Navbar>

      <Routes>

        <Route path='/' element={<Home> </Home>}>
          <Route path='pop' element={<PopUnder> </PopUnder>}> </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
