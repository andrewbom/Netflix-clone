const API_KEY = "034633e04352959cd4424c9d9718e3c2";

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/trending/tv/day?api_key=${API_KEY}`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=10749`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=10402`,
};

export default requests;
