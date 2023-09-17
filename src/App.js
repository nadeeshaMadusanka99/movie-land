 import {useState,useEffect} from 'react';
 import './App.css';
 import searchIcon from './search.svg';
 import MovieCards from './components/MovieCards';

const API_URL = 'http://www.omdbapi.com/?apikey=ca125a1a';  // omdbapi URL

const App = () => {
  const [movies, setMovies] = useState([]);
  const [Search, setSearch] = useState('');

  // Fetching movies from omdbapi
  const searchMovies = async (title) => {
    const completeURL = API_URL + '&s=' + title
    const res = await fetch(completeURL);
    const data = await res.json();
    
    setMovies(data.Search);
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies(Search);
    }
  }
  
  useEffect(() => {
    searchMovies('Avengers');
    }, []);

  return (
    
      <div className="app">
        <h1>Movie Master</h1>
        <div className='search'>
          <input 
            placeholder='Search for a movie'
            value = {Search}
            onChange={(e)=>{setSearch(e.target.value)}}
            onKeyDown={handleSearchKeyDown}
          />
          <img 
              src = {searchIcon}
              alt = 'search-icon'
              onClick = {
                () => {searchMovies(Search)}
              }
          />
        </div>
        <div>
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => ( <MovieCards movie={movie} />))}
            </div>) : 
            (
            <div className="empty">
              <h2>Unfortunately no movies found</h2>
            </div>
          )}
      </div>
    </div>
  );
};

export default App;
