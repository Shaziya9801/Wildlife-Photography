"use client"
import { useAppDispatch } from '@/Redux/Hooks/Hooks'
import { fetchallcategory } from '@/Redux/Slice/Slice'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const AllCategory = () => {

    const [category,setCategory]=React.useState<any[]>([])
    const dispatch=useAppDispatch();

    useEffect(()=>{
        dispatch(fetchallcategory()).then(res => {
            console.log(res.payload.data);
            setCategory(res.payload.data)
        })
    },[dispatch])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Categories
      </Typography>
      <Grid container spacing={3}>
        {category.map((showallcategory) => (
          <Grid item xs={12} sm={12} md={6} lg={12} key={showallcategory.id} 
          >
            <Card sx={{ maxWidth: 200 }}>
              <Typography>{showallcategory.category}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AllCategory