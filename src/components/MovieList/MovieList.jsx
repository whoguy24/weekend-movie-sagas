// IMPORT COMPONENTS
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem.jsx'

// COMPONENT FUNCTION
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie) => (
                    <MovieListItem key={movie.id} movieItem={movie}/>
                ))}
            </section>
        </main>

    );
}

// EXPORT COMPONENT
export default MovieList;