import React from 'react'
import { AppBar, MenuIcon, Box, ToolBar, Typography, Button, Icon, MenuIcon } from '@material-ui/core'


export const Toolbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Jeffrey
          </Typography>
          <Button color="inherit">Nasa Images</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
