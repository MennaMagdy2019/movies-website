import { fetchMovie } from "../api/fetchmovies"

export const getAllMovies=(data) =>({
    type:"GetAllMovies",payload:data
})
// export const getMovies= (data)=>(dipatch) =>{
//     fetchMovie().then((res) => dispatch ({type:"GetAllMovies",payload:data}))
// }

// export const getMovieById=(Id) =>({
//     type:"GetAMovie",payload:movieId
// })