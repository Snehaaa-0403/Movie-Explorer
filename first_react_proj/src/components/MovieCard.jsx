import "./MovieCard.css";
import { useMovieContext } from "../Contexts/MovieContext";

function MovieCard({movie}){
    const {favourites,toggleFavourite} = useMovieContext();
    const isFavourite = favourites.some(
        (fav) => (fav.imdbID || fav.id) === (movie.imdbID || movie.id)
    );

    return(
        <div className="movie-card" key={movie.imdbID || movie.id}>
            <div className="movie-poster">
                <img className="movie-img" src={movie.Poster} alt={movie.Title}/>
                <div className="movie-like">
                    <button
                        type="button"
                        className="favorite-btn"
                        onClick={() => toggleFavourite(movie)}  
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill={isFavourite ? "red" : "#f0f0f0"} 
                        className="favourite-icon"
                        >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 
                                3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
                                3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h4 className="movie-name">{movie.Title}</h4>
                <p className="movie-release-date">{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;