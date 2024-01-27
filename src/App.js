import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Events from './Pages/Events/Events';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Events' element={<Events/>} />
            {/* <Route path='/contact' element={<Footer/>}/> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
    
    </div>
  );
}

export default App;
