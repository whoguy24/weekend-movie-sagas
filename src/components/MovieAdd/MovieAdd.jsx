// IMPORT COMPONENTS
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GenreDropdown from '../GenreDropdown/GenreDropdown.jsx'

// COMPONENT FUNCTION
function MovieAdd () {

    // Define Import Variables
    const dispatch = useDispatch();
    const history = useHistory();

    // Define Local State Variables
    let [title, setTitle] = useState('');
    let [imageLink, setImageLink] = useState('');
    let [description, setDescription] = useState('');
    let [associatedGenres, setAssociatedGenres] = useState([]);

    const genres = useSelector(store => store.genres);

    // let newGenres = [
    //     {
    //         id:1,
    //         name:'Adventure'
    //     },
    //     {
    //         id:2,
    //         name:'Whatever'
    //     }
    // ]

    // Run Code on Page Load
    // useEffect(() => {
    // }, []);

    // Handle Back Button
    function handleBackButton () {
        history.push('/');
    }

    // Handle Submit Button
    function handleSubmitButton (event) {
        event.preventDefault()
        console.log('CLICK');
    }

    // Define Movie Genre
    function handleAddGenre (event) {
        event.preventDefault();
        let newGenresList = [... associatedGenres];
        newGenresList.push(0)
        setAssociatedGenres(newGenresList);
    }

    return (

        <div>

            <form action="handleSubmitButton">
                <input type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
                <input type="text" 
                    value={imageLink} 
                    onChange={(event) => setImageLink(event.target.value)} 
                />
                <input type="text" 
                    value={description} 
                    onChange={(event) => setDescription(event.target.value)} 
                />





                <table>
                    <tbody>

                            {associatedGenres.map((movieGenre) => {
                                
                                return (
                                    <tr key={movieGenre}>
                                        <td>
                                            <GenreDropdown />
                                        </td>
                                    </tr>
                                );
                            })}

                        <tr>

                            <td>
                                <button onClick={handleAddGenre}>Add Genre</button>
                            </td>
                        </tr>
                    </tbody>
                </table>



            </form>





            <button onClick={handleBackButton}>Back</button>
            <button onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}

// EXPORT COMPONENT
export default MovieAdd;