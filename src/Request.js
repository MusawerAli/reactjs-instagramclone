const API_KEY = "3d1c321a81d21e821b62ce79e9a7d766";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=an-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=an-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;