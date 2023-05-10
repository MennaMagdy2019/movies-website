import React, { useState } from 'react'
import { Box, Button, Stack , TextField } from '@mui/material';
import {styled} from '@mui/system';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

const [std,setNewStd] = useState({name:"",age:""})
 const navigate = useNavigate();
const handleChange = (e)=>{
  let {value,name}= e.target
  setNewStd({...std,[name]:value})
}
 const handleSubmite = (e)=>{
  e.preventDefault()
   localStorage.setItem("std",std.name)
//    console.log(localStorage.getItem("std"))
 navigate("/home");
 }
 const StyleForm = styled('form')({
    background:'#559ed6',
    color:'#fff',
    display:'block',
    width:'500px',
    margin:'100px auto',
    textAlign:'center',
    padding:'10px'
 })

  return (
    
    
<StyleForm onSubmit={handleSubmite}>
<h2 centered >Login Form</h2>
     <TextField 
     m={3}
     width="100%"
     sx={{display:'block',width:'100%'}}
      variant='standard' label="Email" value={std.name} name="name" onChange={handleChange}/>
     <TextField
     m={5}
     width="100%"
     sx={{display:'block',width:'100%'}}
      variant='standard'  label="Password" type="password" name="age"  value={std.age} onChange={handleChange}/>
     <Button 
     m={3}
     variant="contained"  type="submit" value="add" sx={{bgcolor: 'primary.main' ,display:'block',m:'10px auto',px:5,textAlign: 'center' }}>Add</Button>
     {/* <Box sx={{ bgcolor: 'error.main' }}>primary.main</Box> */}
 </StyleForm>
  )
}

export default LoginForm