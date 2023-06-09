import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'


function App() {
  
  return (
    <>
      <Router>
           <div className='App'>
           {/* {(window.location.href.includes('/Game'))||(window.location.href.includes('Play'))? null: <Navbar /> } */}

            <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
          </Routes>
        </div>
        {/* {(window.location.href.includes('/Game'))||(window.location.href.includes('Play'))?  null:<Footer /> }       */}

      </Router>
    </>
  );
} 

export default App;
