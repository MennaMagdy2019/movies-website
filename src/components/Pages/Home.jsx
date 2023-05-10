import { useContext, useEffect , useState } from 'react';
import { Link, Outlet} from "react-router-dom";
import axios from 'axios'
// import { getAllMovies } from '../redux/actionCreators';
import {useSelector , useDispatch} from 'react-redux'

import { getAllMovies } from '../../redux/actionCreators';

import{
  Box,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider
} from "@mui/material"

const Home = () => {

    // const {moviesArr} = useContext(movieContext);
   // console.log(moviesArr)
    
  const moviesArr = useSelector((state)=> state)
  console.log(moviesArr)
  const dispatch= useDispatch()
  useEffect(()=>{
      axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd')
    .then(res => {
     dispatch(getAllMovies(res.data.results))
    // dispatch(getAllMovies())
  
  })},[dispatch])

  let url_img="https://image.tmdb.org/t/p/original/" 
    return ( 
        <>
      
       <div className='container'>
        {/* <div className='row'> */}
        <Stack direction={"row"}  spacing={3} useFlexGap flexWrap="wrap">
            {moviesArr?.map((movie)=>
           
            <Box 
            height="600px"
            width="400px" 
            overflow="auto"
            m={1}
            >
              
            <Card>
            <Typography variant="h4">{movie.title}</Typography>
              <CardMedia 
               component="img"
               height="400px"
               image={`${url_img}${movie.poster_path}`}
              />
              <CardContent>
                  <Typography variant="body1">
                  {movie.overview}
                  </Typography>
              </CardContent>
              <CardActions
              sx={{display:'block' }}>
                <Link  
               to={`${movie.id}`} sx={{ textAlign: 'center' , p:2}}>Details</Link>
              </CardActions>
            </Card>
           </Box>
            )}
         </Stack>
            {/* </div> */}
       </div>
        </>
     );
}
 
export default Home;