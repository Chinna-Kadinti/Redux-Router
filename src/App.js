import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Sample from './pages/Sample';

function App() {
  return (
   <Router>
    <div style={{padding: "25px", justifyContent: 'space-evenly', alignItems:'flex-end', display:'flex'}}>
      <Link  to='/'>Home</Link>
      <Link to='/sample'>SampleComponent</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sample' element={<Sample/>}/>
    </Routes>
   </Router>
  );
}

export default App;
