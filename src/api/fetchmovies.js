import axios from 'axios'
export const  fetchMovie = () => axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd');


