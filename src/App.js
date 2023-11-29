
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './pages/contactMe';

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
