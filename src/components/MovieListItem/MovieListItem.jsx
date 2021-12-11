// IMPORT COMPONENTS
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// COMPONENT FUNCTION
function MovieListItem({movieItem}) {

    // Define Import Variables
    const dispatch = useDispatch();
    const history = useHistory();

    // Handle Click on Movie
    function handleMovieClick(movie) {
        dispatch({ type: 'SET_FEATURED_MOVIE', payload: movie });
        history.push('/details');
    }

    // Render on the DOM
    return (
        <div key={movieItem.id} >
            <h3>{movieItem.title}</h3>
            <img 
                src={movieItem.poster} 
                alt={movieItem.title}
                onClick={() => handleMovieClick(movieItem)}
            />
        </div>
    )
}

// EXPORT COMPONENT
export default MovieListItem;