// IMPORT COMPONENTS
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENT FUNCTION
function MovieAdd () {

    // Define Import Variables
    const history = useHistory();
    const dispatch = useDispatch();

    // Define Redux Store Variables
    const genres = useSelector(store => store.genres);

    // Define Local State Variables
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState(0);

    // Run Code on Page Load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // Handle Back Button
    function handleBackButton () {
        history.push('/');
    }

    // Handle Submit Button
    function handleSubmitButton (event) {
        event.preventDefault()
        console.log(genre);
        dispatch(
            { 
                type: 'ADD_MOVIE', 
                payload: { 
                    title, 
                    poster, 
                    description,
                    genre
                }
            }
        );
    }

    return (
        <div>
            <form action="handleSubmitButton">
                <input type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
                <input type="text" 
                    value={poster} 
                    onChange={(event) => setPoster(event.target.value)} 
                />
                <input type="text" 
                    value={description} 
                    onChange={(event) => setDescription(event.target.value)} 
                />
                <select value={genre} onChange={(event) => setGenre(event.target.value)}>
                <option disabled value='0'>Select Genre</option>
                    {genres.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        );
                    })}
                </select>
            </form>
            <button onClick={handleBackButton}>Back</button>
            <button onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}

// EXPORT COMPONENT
export default MovieAdd;