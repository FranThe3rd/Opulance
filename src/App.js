import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
// Hidden (Bouncing) Elements
import useHiddenElementsEffect1 from './animations/hidden/useHiddenElementsEffect1';
import useHiddenElementsEffect2 from './animations/hidden/useHiddenElementsEffect2';
import useHiddenElementsEffect3 from './animations/hidden/useHiddenElementsEffect3';
import useHiddenElementsEffect4 from './animations/hidden/useHiddenElementsEffect4';
import useHiddenElementsEffect5 from './animations/hidden/useHiddenElementsEffect5';
import useHiddenElementsEffect6 from './animations/hidden/useHiddenElementsEffect6';
import useHiddenElementsEffect7 from './animations/hidden/useHiddenElementsEffect7';
import useHiddenElementsEffect8 from './animations/hidden/useHiddenElementsEffect8';
import useHiddenElementsEffect9 from './animations/hidden/useHiddenElementsEffect9';
// Opacity (Fade) Elements
import useOpacityHide from './animations/opacity/useOpacityHide';


function App() {
  useHiddenElementsEffect1();
  useHiddenElementsEffect2();
  useHiddenElementsEffect3();
  useHiddenElementsEffect4();
  useHiddenElementsEffect5();
  useHiddenElementsEffect6();
  useHiddenElementsEffect7();
  useHiddenElementsEffect8();
  useHiddenElementsEffect9();
  useOpacityHide();
  
  return (
    <div className="App">
    
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
