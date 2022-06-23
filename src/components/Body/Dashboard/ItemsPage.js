import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardItemPage from './CardItemPage';

const useStyles = makeStyles((theme) => ({
 
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ItemsPage = () => {
    const classes = useStyles();

  
  return (
      <Grid container spacing={3}>
        <CardItemPage/> 
        
      </Grid>
  )
}

export default ItemsPage
