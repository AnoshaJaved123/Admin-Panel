import React from 'react'
import { Toolbar, AppBar, Typography, Hidden,Box,IconButton } from '@material-ui/core'
import Profile from './Navbartabs/Profile';
import Notification from './Navbartabs/Notification';
import Mail from './Navbartabs/Mail';
import { useStyles } from './Navbartabs/HeaderStyles';
import ReorderIcon from '@material-ui/icons/Reorder';



const NavebarNew = ({handleDrawerToggle}) => {
    const classes = useStyles()
   
    return (
        <AppBar position="sticky" style={{color:'white', backgroundColor:'#008080'}}>
            <Toolbar className={classes.toolbar}>
        
                <Typography variant="h6" className={classes.title}>
                    Office Admin
                </Typography>
                <Hidden smDown>
     
               <Box className={classes.box}>

            <Notification/>
            <Mail/>
               <Profile/>

               </Box> 
               </Hidden>

               <Hidden mdUp>
               <IconButton onClick={handleDrawerToggle} className={classes.box} color='inherit'>
               <ReorderIcon/>
               </IconButton>
               </Hidden>
            </Toolbar>
            
        </AppBar>
    )
}

export default NavebarNew
