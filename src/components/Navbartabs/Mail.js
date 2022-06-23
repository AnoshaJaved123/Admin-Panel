import React,{useState} from 'react'
import { Box,Menu,MenuItem,IconButton,ListItemIcon,ListItem,Badge} from '@material-ui/core'

import EmailIcon from '@material-ui/icons/Email';

const Mail = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  
    const dropdown = [
        {label:"Message from Monica"},
        {label:"Message from Ross"},
              
    ]
  return (
    <Box>
    <IconButton aria-controls="mail-menu" aria-haspopup="true" onClick={handleClick} color='inherit'>
    
    <Badge badgeContent={4} color="secondary">
    <EmailIcon />
        </Badge>
    </IconButton>
    <Menu
        id="mail-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
    {
        dropdown.map((item,i) => (

            <MenuItem key={i} component={ListItem} onClick={handleClose}>
        <ListItemIcon>{item.label}</ListItemIcon>

        </MenuItem>
        ))
    }
     
    </Menu>
</Box>
  )
}

export default Mail
