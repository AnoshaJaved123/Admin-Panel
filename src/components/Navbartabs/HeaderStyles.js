import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    toolbar:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between'
    },
    box:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-end' 
    },
    boxapp:{
        padding: theme.spacing(2,2,0,32),

        [theme.breakpoints.down("sm")]:{
        padding: theme.spacing(2,2,0,2),  
        }
    },
    navlist:{
        minWidth: '250px',
        maxWidth:'300px'
    },
    setAvatar:{
       width:'35px',
       height:'35px'
    },
    ulAvatar:{
    backgroundColor:'#008080',
    color:"white"
    },
    //navsidebar size
    drawerPaper:{
        width:'250px',
        marginTop:'65px'
    },
    //sidebar link color styles
    navlinkstyle:{
       "& div":{
        color: '#008080'
       },
       "& :hover":{
        color:'#00CED1'
       }
    },
    activeclass:{
        color: 'red'
    }
}))