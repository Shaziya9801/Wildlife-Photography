"use client"
import { EmojiEmotions } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import React from 'react'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "673ab7"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color='inherit' aria-label='logo' size='large'>
            <EmojiEmotions fontSize='large' />
          </IconButton>

          <Typography
            variant='h6'
            component="a"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              ml: 1,
            }}
          >Blogging
          </Typography>

          <Tabs>
            <Tab label="All Blogs" 
            sx={{fontWeight:'bold',color:'inherit',fontSize:'30px'}}/>

            <Tab label="Blog Details"
             sx={{fontWeight:'bold',color:'inherit'}}/>
          </Tabs>
        </Box>

        <Box>
          {/* <Link href="/Blog" passHref legacyBehavior>All Blogs</Link> */}

          <Link href="/Signup" passHref legacyBehavior>
            <Button type="Submit"
              component="a"
              color="inherit"
              startIcon={<LoginIcon />}
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                color: "#673ab7",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Sign Up
            </Button>
          </Link>

          <Link href="/Signin" passHref legacyBehavior>
            <Button
              component="a"
              color="inherit"
              startIcon={<LoginIcon />}
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                color: "#673ab7",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Sign In
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header