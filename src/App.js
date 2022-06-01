import { Route, Routes } from 'react-router-dom';
import './App.css';
import BannerAd from './components/Home/AdFormate/BannerAd';
import PopUnder from './components/Home/AdFormate/PopUnder';
import Skim from './components/Home/AdFormate/Skim';
import Home from './components/Home/Home';
import NastedHome from './components/Home/Nasted/NastedHome';
import Native from './components/Home/Native';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar1';

function App() {
  return (
    <div>
      <Navbar> </Navbar>

      <Routes>

        <Route path='/' element={<Home> </Home>}>
          <Route path='pop' element={<PopUnder> </PopUnder>}> </Route>
          <Route path='banner' element={<BannerAd> </BannerAd>}> </Route>
          <Route path='native' element={<Native></Native>}> </Route>
          <Route path='skim' element={<Skim></Skim>}> </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
