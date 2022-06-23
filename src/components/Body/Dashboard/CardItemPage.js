import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import h5 from '../../assets/images/h5.png'
import h56 from '../../assets/images/h56.png'
import h67 from '../../assets/images/h5.png'
import house from '../../assets/images/house.png'






const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginLeft: '15px',
      marginBottom: '15px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: orange[500],
    },
  }));

  const carddata=[
    {title:'A',name:'name1',date:'date1',PicURL:h5,desc:'desc1',para1:'para1',para2:'para2',para3:'para3'},
    {title:'S',name:'name2',date:'date12',PicURL:h56,desc:'desc12',para1:'para12',para2:'para22',para3:'para32'},
    {title:'C',name:'name3',date:'date13',PicURL:h67,desc:'desc13',para1:'para13',para2:'para23',para3:'para33'},
    {title:'G',name:'name4',date:'date4',PicURL:house,desc:'desc14',para1:'para14',para2:'para24',para3:'para34'},
    {title:'A',name:'name1',date:'date1',PicURL:h5,desc:'desc1',para1:'para1',para2:'para2',para3:'para3'},
    {title:'S',name:'name2',date:'date12',PicURL:h56,desc:'desc12',para1:'para12',para2:'para22',para3:'para32'},
    {title:'C',name:'name3',date:'date13',PicURL:h67,desc:'desc13',para1:'para13',para2:'para23',para3:'para33'},
    {title:'G',name:'name4',date:'date4',PicURL:house,desc:'desc14',para1:'para14',para2:'para24',para3:'para34'},

  ]
const CardItemPage = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <>
      {
          carddata.map((item,i)=>(

            <Card key={i} className={classes.root}>
           
            <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {item.title}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader="September 14, 2022"
      />
      <CardMedia
        className={classes.media}
        // image={require('../../assets/images/img3.png')} 
        image={item.PicURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
          
        </Card>
        ))
    }
    </>
     
  )
}

export default CardItemPage





 
