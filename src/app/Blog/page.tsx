"use client"
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks/Hooks'
import { fetchblogs } from '@/Redux/Slice/Slice';
import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AllBlog = () => {
    const router = useRouter()
    const [blogs, setBlogs] = React.useState<any[]>([])
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchblogs()).then(res => {
            console.log(res.payload.data);
            setBlogs(res.payload.data)

        })
    }, [dispatch]);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }} align="center">
                 All Blog
            </Typography>
            <Grid container spacing={4}>
                {blogs?.map((blog: any) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`data:${blog.photo.contentType};base64,${blog.photo.data}`}
                                alt={`${blog?.title} image`}
                            />

                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    {blog?.title}
                                </Typography>

                                <Box
                                    dangerouslySetInnerHTML={{ __html: blog?.postText.slice(0, 250) }}
                                >

                                </Box>
                                <Divider sx={{ mb: 2 }} />

                                <Link href={`BlogDetails/${blog._id}`} passHref legacyBehavior>
                                    <Button type="Submit" 
                                        component="a"
                                        color="inherit"
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: "#fff",
                                            color: "#673ab7",
                                            "&:hover": {
                                            backgroundColor: "#f1f1f1",
                                            },
                                        }}
                                    >
                                        All Details
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default AllBlog