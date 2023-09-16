 import {useEffect} from 'react';
 import './App.css';
 import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=ca125a1a';

const App = () => {
  const searchMovies = async (title) => {
    const completeURL = API_URL + '&s=' + title
    const res = await fetch(completeURL);
    const data = await res.json();
    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('Batman');
    }, []);

    const movie1 = {
      Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title : "Batman Begins",
      Type : "movie",
      Year : "2005",
      imdbID: "tt0372784"
    }
  return (
    
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for a movie'
          value="Superman"
          onChange={()=>{}}
        />
          <img 
               src = {searchIcon}
                alt = 'search-icon'
                onClick = {
                  () => {}
                }
          />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
