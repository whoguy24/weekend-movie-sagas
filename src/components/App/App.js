import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import MovieDetail from '../MovieDetail/MovieDetail.jsx'
import MovieAdd from '../MovieAdd/MovieAdd.jsx'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <MovieDetail />
        </Route>

        <Route path="/add_movie" exact>
          <MovieAdd />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
