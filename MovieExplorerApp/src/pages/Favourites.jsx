import "./Favourites.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites(){
    const {favourites} = useMovieContext();
    if(favourites.length>0){
        return(
            <div>
                <div className="heading">
                    <h2>Your Favourites</h2>
                </div>
                <div className="movie-list">
                    {favourites.map((movie, index) => (
                        <MovieCard movie={movie} key={`${movie.imdbID || movie.id}`} />
                    ))}
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <h2>No Favourite Movies Yet</h2>
        </div>
    )
}
export default Favourites;