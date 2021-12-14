
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import Gamepage from './pages/Gamepage';



function App() {


  
  return (
    <>  
  
    <Routes>
      <Route exact path="/" element={   <Landing />} />
      <Route exact path="/game" element={<Gamepage />} />
    </Routes>
    
    </>
  )
    



}

export default App;
