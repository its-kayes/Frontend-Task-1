import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar1';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      {/* <Navbar1> </Navbar1> */}
      {/* <h1 className='bg-secondary'> Kaj koro to ? </h1> */}
      <Routes>
        <Route path='/' element={<Home> </Home>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
