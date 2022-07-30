import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './pages/main';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<Main />} />        
        <Route path="/services" element={<Services/>} />        
        <Route path="/about" element={<About />} />        
        <Route path="/contact" element={<Contact />} />                        
      </Routes>    
    </BrowserRouter>        
  );
}

export default App;
