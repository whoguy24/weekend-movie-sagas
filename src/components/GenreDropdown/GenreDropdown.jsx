// IMPORT COMPONENTS
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENT FUNCTION
function GenresDropdown () {

    // Define Import Variables
    const dispatch = useDispatch();

    // Define Redux Store Variables
    const genres = useSelector(store => store.genres);

    // Define Local State Variables
    let [id, setId] = useState(0);

    function handleGenreDropdown (id) {
        setId(id);
    }

    // Run Code on Page Load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <div>
            <select value={id} onChange={(event) => handleGenreDropdown(event.target.value)}>
                <option disabled value='0'>Select Genre</option>
                {genres.map((genre) => {
                    return (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

// EXPORT COMPONENT
export default GenresDropdown;