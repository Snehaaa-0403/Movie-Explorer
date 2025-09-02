import './App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import { Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Practice from './pages/Practice';
import {MovieProvider} from './Contexts/MovieContext';

function App(){
  
  return(
    <MovieProvider>
      <div>
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Favourites" element={<Favourites />}/>
          <Route path="/prac" element={<Practice/>}/>
        </Routes>
      </main> 
    </MovieProvider>
  );
}

export default App;
