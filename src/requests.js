const API_KEY = "fe1a9d25b595c2fba47b0c856a336050";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;


