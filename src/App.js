
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './pages/Contactme';

function App() {
  return (
    <>
 


   <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/contact' element={<ContactMe/>}></Route>
   </Routes>
   

</>

  );
}

export default App;
