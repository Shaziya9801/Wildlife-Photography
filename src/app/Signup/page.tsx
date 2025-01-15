"use client"
import Checkbox from '@mui/icons-material/Checkbox';
import { Avatar, Box, Button, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signup } from '@/Redux/Slice/Slice';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks/Hooks';
import Link from 'next/link';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Signup = () => {
    let dispatch = useAppDispatch()

    const { message } = useAppSelector((state) => state.auth)

    const [signData, setsignupData] = useState({
        uname: "",
        mail: "",
        pass: "",
        mobno:"",
        error: {
            uname: "",
            mail: "",
            pass: "",
            mobno:""
        },
    })

    const [fileName, setFileName] = useState<any>("");

    const changeHandler = (e: any) => {
        e.persist();
        let { name, value } = e.target;
        setsignupData({ ...signData, [name]: value });
    }

    const handleFileChange = (e: any) => {
        console.log("Choosen image:", e.target.files[0].name);
        setFileName(e.target.files[0].name)
    }

    interface SignupResponse {
        data: {
            status: number;
            message: string;
        };
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        console.log("Signup Data", signData, fileName);

        let userData = new FormData();
        userData.append("name", signData.uname)
        userData.append("email", signData.mail)
        userData.append("password", signData.pass)
        userData.append("mobile",signData.mobno)
        userData.append("photo", fileName)


        dispatch(signup(userData))
            .then((res: any) => {
                console.log(res);
                if (res.payload.data.status === 200) {
                    alert(res.payload.message)
                }
                else {
                    alert(res.payload.message)
                }
            }).catch((err: any) => {
                console.log(err);
            })
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
            <Typography variant='h4' sx={{ textAlign: "center", fontFamily: 'Raleway' }}>Sign Up</Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandler}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField onChange={changeHandler}
                            placeholder='Enter username'
                            name='uname'
                            fullWidth
                            required
                            autoFocus
                            sx={{ mb: 2 }}>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onChange={changeHandler}
                            placeholder='Enter your email'
                            name='mail'
                            fullWidth
                            required
                            type='email'>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onChange={changeHandler}
                            placeholder='Enter mobile number'
                            name='mobno'
                            fullWidth
                            required
                            type='number'>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onChange={changeHandler}
                            placeholder='Enter password'
                            name='pass'
                            fullWidth
                            required
                            type='password'>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                    <input
                        accept="image/*" 
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload">
                        <Button
                            variant="contained"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload File
                        </Button>
                    </label>
                    {fileName && (
                        <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                            Selected file: {fileName}
                        </Typography>
                    )}
                </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant='contained' fullWidth sx={{ mt: 1 }}>
                            Sign Up
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
                                Already have an account..?
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Signup