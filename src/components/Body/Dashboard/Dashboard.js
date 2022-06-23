import React,{useEffect} from "react";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";

import { useStyles } from './BodyStyles';
import PageHeader from "../../Common/PageHeader";
import { Box, Button, Card, CardContent, Grid,Paper } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import { GraphComponent } from "../../Common/GraphComponent";
import DashboardChart from "./DashboardChart";
import TableDashboard from "./TableDashboard";




const Dashboard = () => {
  const classes = useStyles();
  
  const carddata = [
    {page:'Page A', Price: 'Rs. 234323', per:'10%'},
    {page:'Page B', Price: 'Rs. 325463', per:'30%'},
    {page:'Page C', Price: 'Rs. 678956', per:'50%'},
    {page:'Page D', Price: 'Rs. 123212', per:'5%'},

  ]

  
 
  return (
    
    <Box>
      <PageHeader label='Dashboard' pageTitle='App Overview'/>
    <Grid container spacing={3}>
    {
      carddata.map((item,i)=>(
    <Grid key={i} item xs={6} sm={3} >
        <Card >
      <CardContent>
        <Typography variant="body2" className={classes.cardLabel}>{item.page}</Typography>
        <Typography variant="h5" component='h6' className={classes.cardTitle}>{item.Price}</Typography>
        <Typography component='p' style={{textAlign:'center', marginBottom:'0px'}} >
        <Button size="small" className={classes.cardButton} startIcon={<ArrowDropDownIcon/>}>{item.per}</Button>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
      ))
    }
   
      
    <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Paper>
            <Typography variant="h5" component='h6' className={classes.cardTitle}>Daily Staticstics</Typography>
            <DashboardChart/>
            </Paper>
          </Paper>
        </Grid>
   
    <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component='h6' className={classes.cardTitle}>Table</Typography>

           <TableDashboard/>
          </Paper>
        </Grid>
    </Grid>
    </Box>
  );
};
export default Dashboard;
