import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
// import NotificationsIcon from '@material-ui/icons/Notifications';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import DateRangeIcon from '@material-ui/icons/DateRange';
// import ViewModuleIcon from '@material-ui/icons/ViewModule';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import StoreIcon from '@material-ui/icons/Store';
import BarChartIcon from '@material-ui/icons/BarChart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Link } from "react-router-dom";
import { useStyles } from './HeaderStyles';

  

const Sibenavbardata = () => {
    const classes = useStyles()

    const listdata =[
        {text:"Dashboard", link:"/", listicon:<DashboardIcon/>},
        {text:"Products", link:"/product", listicon:<StoreIcon/>},
        {text:"Board", link:"/board", listicon:<PostAddIcon/>},
        {text:"Data Statistics", link:"/static", listicon:<BarChartIcon/>},
        {text:"Notification", link:"/notepage", listicon:<FormatListBulletedIcon/>},
        {text:"Scheduler", link:"/cal", listicon:<EventAvailableIcon/>},
        {text:"Exit", link:"/logout", listicon:<ExitToAppIcon/>},
    ]
  return (
    <List>
        {
            listdata.map((item,i)=>(
                <ListItem key={i} component={Link} to={item.link} className={classes.navlinkstyle}  activeclass={classes.activeclass}>
            <ListItemIcon>
                {item.listicon}
            </ListItemIcon>
            <ListItemText>
                {item.text}
            </ListItemText>
        </ListItem>
            ))
        }
        
    </List>
  )
}

export default Sibenavbardata