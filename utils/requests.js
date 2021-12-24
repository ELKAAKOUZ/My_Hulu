const API_KEY = process.env.API_KEY;
export default {
  fetchTrending: {
    title: "Trending",
    fetchURL: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    fetchURL: `/movie/top_rated/api_key=${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchActionMovies: {
    title: "Action ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorrorMovies: {
    title: "Horror ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchMystery: {
    title: "Mystery ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchAnimation: {
    title: "Animation ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: "Tv Movie ",
    fetchURL: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
