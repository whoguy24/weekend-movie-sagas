// IMPORT COMPONENTS
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// COMPONENT FUNCTION
function MovieDetail() {

    const movie = useSelector((store) => store.featuredMovie);

    useEffect(() => {
    });

    return (
        <p>{movie.title}</p>
    )
}

// EXPORT COMPONENT
export default MovieDetail;