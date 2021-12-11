// IMPORT COMPONENTS
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// COMPONENT FUNCTION
function MovieDetail() {

    // Define Import Variables
    const history = useHistory();

    // Define Redux Store Variables
    const movie = useSelector((store) => store.featuredMovie);

    // Handle Back Button
    function handleBackButton () {
        history.push('/');
    }

    // Render on the DOM
    return (
        <div>
            <img src={movie.poster} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

// EXPORT COMPONENT
export default MovieDetail;