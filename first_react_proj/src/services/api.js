const API_KEY="6d4e51a6";
const BASE_URL="http://www.omdbapi.com/";

export const searchMovies= async(query)=>{
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.Search;
}
