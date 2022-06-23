import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
     
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
 
    divider: {
      margin: theme.spacing(2, 0),
    },

    //header title component 
    pageTitle: {
      marginBottom: theme.spacing(2),
      textTransform: "capitalize",
    },
    pageSubTitle: {
      margin: theme.spacing(1, 0),
      textTransform: "uppercase",
    },
    //card
    cardLabel:{
      textTransform:'uppercase',
      color:'#008080',
      textAlign:'center',
      margin:theme.spacing(1,0),
      [theme.breakpoints.down("xs")]:{
        fontSize:'0.8rem'
      }
    },
    cardTitle:{
      textTransform:'capitazile',
      fontWeight:'bold',
      color:'#008080',
      textAlign:'center',
      margin:theme.spacing(1,0),
      [theme.breakpoints.down("xs")]:{
        fontSize:'1.8rem'
      }
    },
    cardButton:{
      fontWeight:'bold',
      fontSize:'1rem',
      color:'orange',
    },
    //cardGraph
    addgraph: {
    // position: "absolute",
    // bottom: "0",
    // left: "0",
    // width: "100% !important",
    height: "45% !important",
  },

  }));