import React,{useState} from 'react'
import { Box,Menu,IconButton,ListItemIcon,ListItem,Avatar,Badge,ListItemText,List} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
// const useStyles = makeStyles((theme) => ({}))
import { useStyles } from './HeaderStyles';

const Notification = () => {

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dropdown = [
        {name:"Monica",  desc:"likes your data..."},
        {name:"Anosha",  desc:"likes your data..."},
        {name:"Bilal",  desc:"likes your data..."},
        {name:"Habib", desc:"likes your data..."},

        
    ]
  return (
    <Box>
    <IconButton aria-controls="notification-menu" aria-haspopup="true" onClick={handleClick} color='inherit'>
    
    <Badge badgeContent={2} color="secondary">
    <NotificationsIcon/>
    </Badge>
    </IconButton>

    <Menu
        id='Notification'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
    <List className={classes.navlist} >
    
    {
        
        dropdown.map((item,i) => (
            <ListItem key={i} component={ListItem} onClick={handleClose}>
        <ListItemIcon>
        <Avatar className={classes.ulAvatar}>{item.name[0].toUpperCase()}</Avatar>
        </ListItemIcon>
        <ListItemText
                primary={item.name}
                secondary={item.desc}></ListItemText>
          
        </ListItem>
       
        ))
    }
    </List>
     
    </Menu>
</Box>
  )
}

export default Notification
