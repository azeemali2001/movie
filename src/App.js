import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
          <Route path='/' element = {
            <>
              <Banner/>
              <Movies/>
            </>
          }/>

          <Route path='/Favorites' element={<Favorite/>}/>
      </Routes>

    </Router>
  );
}

export default App;