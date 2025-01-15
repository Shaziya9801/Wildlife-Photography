"use client"
import { useAppDispatch } from '@/Redux/Hooks/Hooks'
import { fetchallblogs } from '@/Redux/Slice/Slice'
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';

const AllBlog = ({ params }: { params: Promise<{ id: string }> }) => {
  // console.log("Params",params.id);
  const [id, setId] = useState("")
  useEffect(() => {
    params.then((res: any) => {
      setId(res.id)
    })
  }, [params])
  console.log("Id", id);

  const [allblog, setAllBlog] = React.useState<any>()
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchallblogs(id)).then(res => {
      console.log(res?.payload?.data);
      setAllBlog(res?.payload?.data)
    })
  }, [dispatch, id])

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Blogs Details
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`data:${allblog?.photo?.contentType};base64,${btoa(
                new Uint8Array(allblog?.photo?.data?.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`}
              alt={`${allblog?.title} image`}
            />

            <Typography>{allblog?.title}</Typography>
            <Box
              dangerouslySetInnerHTML={{ __html: allblog?.postText.slice(0, 200) }}
            >
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
              {/* Upload Button */}
              <Button
                variant="contained"
                component="label"
                startIcon={<ImageIcon />}
                sx={{ mb: 2 }}
              >

                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                />
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AllBlog