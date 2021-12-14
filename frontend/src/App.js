
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import Gamepage from './pages/Gamepage';
import JoinPage from './pages/JoinPage';



function App() {


  
  return (
    <>  
  
    <Routes>
      <Route exact path="/" element={   <Landing />} />
      <Route exact path="/game" element={<Gamepage />} />
      <Route exact path="/joined" element={<JoinPage />} />
    </Routes>
    
    </>
  )
    



}

export default App;
