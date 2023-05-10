import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect , useState } from 'react';

import { useSelector } from "react-redux";

import{
  Box,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button
} from "@mui/material"

const Details = () => {
    // const {moviesArr,setmoviesArr} = useContext(movieContext);
    const moviesArr = useSelector((state)=> state)
    let [moviedata,setmoviedata] = useState({})
    const {id} = useParams()
       
    useEffect(()=>{
        {moviesArr?.map((movie)=> movie.id == id ? setmoviedata(movie):console.log("movie"))}
        console.log(moviedata)
    },[moviesArr,id])
    

  
    let url_img="https://image.tmdb.org/t/p/original/" 
    return ( 
       <>
       <Box width="400px" 
        sx={{m:'auto'}}>
        <Card>
        <Typography variant="h3">Details {id}</Typography>
        <Typography variant="h4">{moviedata.title}</Typography>
          <CardMedia 
           component="img"
           height="400px"
           image={`${url_img}${moviedata.poster_path}`}
          />
          <CardContent>
             
              <Typography variant="body1">
              {moviedata.overview}
              </Typography>
          </CardContent>
        </Card>
       </Box>
        
       </>
     );
}
 
export default Details;