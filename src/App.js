
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Navbar from './components/Navbar';
// import Board from './components/Board';
import NavebarNew from './components/NavebarNew';
import Sidenavbar from './components/Navbartabs/Sidenavbar';
import Board from './components/Body/Dashboard/Board'
import Dashboard from './components/Body/Dashboard/Dashboard';
import Statics from './components/Body/Dashboard/Statics';
import NotificationPage from './components/Body/Dashboard/NotificationPage';
import LogoutPage from './components/Body/Dashboard/LogoutPage';
import { Box } from '@material-ui/core';
import { useStyles } from './components/Navbartabs/HeaderStyles';
import ItemsPage from './components/Body/Dashboard/ItemsPage'
import CalenderPage from './components/Body/Dashboard/CalenderPage';


function App() {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle =()=>{
      setMobileOpen(!mobileOpen)
  }
  return (
    <>
   <Router>
    <NavebarNew  handleDrawerToggle={handleDrawerToggle}/>
    <Sidenavbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
    <Box className={classes.boxapp}>
    <Routes>
      <Route path='/board' element={<Board/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/static' element={<Statics/>}/>
      <Route path='/notepage' element={<NotificationPage/>}/>
      <Route path='/cal' element={<CalenderPage/>}/>
      <Route path='/product' element={<ItemsPage/>}/>
      <Route path='/logout' element={<LogoutPage/>}/>

    </Routes>

    </Box>
    
   </Router>
         
    </>
  );
}

export default App;
