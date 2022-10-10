import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import LogIn from './components/LogIn';



function App() {
  return (
    <div>
          
          {/* <Home/> */}
      <Routes>
    
        <Route path ='/' element={<LogIn/>} />
        <Route path ='/Shop-By-Brand' element={<Home/>} />
      </Routes>

     
    </div>
  );
}

export default App;
