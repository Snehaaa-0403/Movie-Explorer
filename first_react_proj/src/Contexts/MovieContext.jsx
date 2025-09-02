import { useState,useEffect,useContext,createContext } from "react";

const MovieContext = createContext();

export const useMovieContext= ()=> useContext(MovieContext); 

export const MovieProvider = ({children})=>{
    const[favourites,setFavourites]=useState([]);
    useEffect(()=>{
        const storedFavs=localStorage.getItem("favourites");
        if(storedFavs){
            setFavourites(JSON.parse(storedFavs));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("favourites",JSON.stringify(favourites));
    },[favourites]);

    const toggleFavourite = (movie) => { 
        setFavourites(prev => {
            const movieId = movie.imdbID || movie.id;
            const exists = prev.some(m => (m.imdbID || m.id) === movieId);
            if (exists) {
                return prev.filter(m => (m.imdbID || m.id) !== movieId); 
            } else {
                return [...prev, movie]; 
            }
        });
    };

    const value={
        favourites,
        toggleFavourite
    }
    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

