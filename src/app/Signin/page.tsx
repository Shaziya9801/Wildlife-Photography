"use client"
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks/Hooks'
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { signin } from '@/Redux/Slice/Slice';

const Signin = () => {

  const dispatch = useAppDispatch();
  const {message,userData}= useAppSelector(
    (state:any)=> state.auth
)

  const [signinInput,setSignin] = useState<any>({
    emaill:"",
     pw:""
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target
    setSignin({...signinInput, [name]: value});
  };

  const submitHandle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email:signinInput.emaill,
      password:signinInput.pw
    }

    dispatch(signin(userData))
    .then((res:any)=>{
      console.log("Case is",res.payload);
      if (res.payload.status === 200) 
        {
          alert(res.payload.message);
          window.localStorage.setItem("token",res.payload.token);
        } 
        else 
        {
          alert(res.payload.message);
        }
      })
      .catch((err:any) => {
        console.log(err);
      });
  }
  return (
    <Box sx={{
      maxWidth: 400,
      mt: 4,
      mx: "auto",
      borderRadius: 4,
      boxShadow: 3,
      padding: 4
  }}>
      <Avatar sx={{
          mx: "auto",
          bgcolor: "secondary.main",
          textAlign: "center",
          mt: 1
      }}>
          <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h4' sx={{ textAlign: "center", fontFamily: 'Raleway' }}>Sign In</Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandle}>
          <Grid container spacing={2}>

              <Grid item xs={12}>
                  <TextField onChange={handleChange}
                      placeholder='Enter your email'
                      name='emaill'
                      fullWidth
                      required
                      type='email'>
                  </TextField>
              </Grid>

              <Grid item xs={12}>
                  <TextField onChange={handleChange}
                      placeholder='Enter password'
                      name='pw'
                      fullWidth
                      required
                      type='password'>
                  </TextField>
              </Grid>

              <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
              </Grid>

              <Grid item xs={12}>
                  <Button type="submit" variant='contained' fullWidth sx={{ mt: 1 }}>
                      Sign In
                  </Button>
              </Grid>

              <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                  <Grid item>
                      <Link href="">
                          Forgot Password?
                      </Link>
                  </Grid>

                  <Grid item>
                      <Link href="">
                          Sign In
                      </Link>
                  </Grid>
              </Grid>
          </Grid>
      </Box>
  </Box>
  )
}

export default Signin