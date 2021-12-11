// IMPORT COMPONENTS
import { useHistory } from 'react-router-dom';

// COMPONENT FUNCTION
function MovieAdd () {

    // Define Import Variables
    const history = useHistory();

    // Handle Back Button
    function handleBackButton () {
        history.push('/');
    }

    return (
        <button onClick={handleBackButton}>Back</button>
    )
}

// EXPORT COMPONENT
export default MovieAdd;