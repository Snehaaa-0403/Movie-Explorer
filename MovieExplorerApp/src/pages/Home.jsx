import MovieCard from "../components/MovieCard";
import "./Home.css";
import { useState } from "react";
import { searchMovies } from "../services/api";

function Home(){
    const movies=[
        {id:1,Title:"Diplomat",Year:2019,Poster:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/The_Diplomat_2025_film.jpeg/250px-The_Diplomat_2025_film.jpeg"},
        {id:2,Title:"Saiyaaran",Year:2025,Poster:"https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg"},
        {id:3,Title:"Dil dhadakne do",Year:2018,Poster:"https://m.media-amazon.com/images/S/pv-target-images/3c1ca1cf888ab33eb59ba2ca4ecdd2d2800e0f329bfc660053c34599a0559ce4.jpg"},
        {id:4,Title:"My Oxford Year",Year:2025,Poster:"https://upload.wikimedia.org/wikipedia/en/thumb/1/15/My_Oxford_Year_poster.jpg/250px-My_Oxford_Year_poster.jpg"},
        {id:5,Title:"The Intern",Year:2015,Poster:"https://play-lh.googleusercontent.com/BBuciXL5nQt_bMjXw1JlazVcgYRnFDGg4XdIMPXhNxuj6AV8qSDSdHhvxPaLirhiIDf56Q=w240-h480-rw"},
        {id:6,Title:"Titanic",Year:1997,Poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202301/Titanic_1674401841.jpg"},
        {id:7,Title:"Purple Hearts",Year:2022,Poster:"https://upload.wikimedia.org/wikipedia/en/8/82/PurpleHeartsNetflix_cover.png"},
        {id:8,Title:"Bhool Bhulaiya 2",Year:2022,Poster:"https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg/250px-Bhool_Bhulaiyaa_2_film_poster.jpg"},
        {id:9,Title:"It Ends With Us",Year:2024,Poster:"https://upload.wikimedia.org/wikipedia/en/1/1b/It_Ends_with_Us_2024_film_poster.jpg"},
        {id:10,Title:"The Batman",Year:2022,Poster:"https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg"},
        {id:11,Title:"Red Notice",Year:2021,Poster:"https://thebatt.com/wp-content/uploads/2021/11/1d751a902ebb36ad80a94acb0e4fef21-1-1200x675.jpg"},
        {id:12,Title:"Crazy Rich Asians",Year:2018,Poster:"https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_FMjpg_UX1000_.jpg"},
        {id:13,Title:"Raid 2",Year:2025,Poster:"https://upload.wikimedia.org/wikipedia/en/8/82/Raid_2_poster.jpg"},
        {id:14,Title:"The Big Bull",Year:2021,Poster:"https://upload.wikimedia.org/wikipedia/en/3/34/The_Big_Bull_Film.jpg"},
        {id:15,Title:"Dear Zindagi",Year:2016,Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwT3w2xfrNXrqUIJB-Kfo5m30wsK7XYAzUg&s"}
    ];

    const [searchQuery,setsearchQuery]=useState("");
    const [loading,setLoading]=useState(false);
    const [err,setErr]=useState(null);
    const [movieSearch,setMovies] = useState([]);

    const handleSearch = async(e)=>{
        e.preventDefault();
        if(!searchQuery.trim()){return;}
        if(loading){return;}
        setLoading(true);

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setErr(null);
        }
        catch(err){
            console.log(err);
            setErr("Failed to search movies");
        }
        finally{
            setLoading(false);
        }
        setsearchQuery("");
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e)=>setsearchQuery(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movie-list">
                {(movieSearch.length > 0 ? movieSearch : movies).map((movie, index) => (
                    <MovieCard movie={movie} key={movie.imdbID || movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;
