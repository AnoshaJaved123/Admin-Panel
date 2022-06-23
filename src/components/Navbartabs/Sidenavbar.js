import React,{useState} from 'react'
import { useStyles } from './HeaderStyles';
import {Drawer,Hidden} from '@material-ui/core'
import Sibenavbardata from './Sibenavbardata';
const Sidenavbar = ({mobileOpen,handleDrawerToggle}) => {

    const classes = useStyles()

   

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden mdUp implementation="css">
      <Drawer
      
        variant="temporary"
        anchor={'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Sibenavbardata/>
      </Drawer>
    </Hidden>
    <Hidden smDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
<Sibenavbardata/>
      </Drawer>
    </Hidden>
  </nav>
  )
}
export default Sidenavbar
