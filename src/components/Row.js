import React, { useState, useEffect } from 'react';
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https//developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        console.log('CLICK oK')
        if (trailerUrl) {
            // si une vidéo est déjà affiché, on l'enlève ...
            setTrailerUrl('');
        } else {
            // ... et on ajoute une nouvelle vidéo
            movieTrailer(movie?.title || "")
                .then( url => {
                    // url d'origine : https://www.youtube.com/watch?v=XtMThy8QKqU
                    // on récupère seulement la fin : v=XtMThy8QKqU
                    const urlParams = new URLSearchParams(new URL(url).search);
                    // on passe dans le state la valeur voulu
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch( error => console.log(error) );
        }
    }

    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={ () => handleClick(movie) }
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
