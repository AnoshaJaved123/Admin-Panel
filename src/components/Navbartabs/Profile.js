import React,{useState} from 'react'
import { Box,Menu,MenuItem,Button,ListItemIcon,ListItem,Avatar} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import img2 from '../assets/images/img2.png'
import { useStyles } from './HeaderStyles';

const Profile = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dropdown = [
        {label:"settings", icon:<SettingsIcon/>},
        {label:"logout", icon:<ExitToAppIcon/>},

        
    ]
  return (
    <Box>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
     startIcon={<Avatar className={classes.setAvatar} src={img2}></Avatar>}
    >
   
    </Button>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
    {
        dropdown.map((item,i) => (

        <MenuItem key={i} component={ListItem} onClick={handleClose}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemIcon>{item.label}</ListItemIcon>

        </MenuItem>
        ))
    }
     
    </Menu>
</Box>
  )
}

export default Profile
