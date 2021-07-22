import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Img/FrameEverisColor.png';
import styles from '../css/Navbranch.css';

//Para que quede el mismo alto

const useStyles = makeStyles (theme => ({
  offset: theme.mixins.toolbar,

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title:{
    flexGrow: 1
  }


}))

const Navbars = () => {
  const classes = useStyles()
  return (
<div>
  <AppBar position="fixed" className="header">
    <Toolbar>
    <img src={Logo} alt="logo everis" className="logoEveris"/>
    <IconButton 
      className="menu-icon"
      color="default" 
      aria-label="menu">
      <MenuIcon className="menu-mobile"/> 
      </IconButton>
      <Button id="logout" variant="outlined" color="transparent" display={{ xs: 'none', sm: 'none', lg: 'block', xl: 'block' }}>
          log out
        </Button>
    </Toolbar>
  </AppBar>
  <div className={classes.offset} ></div>
</div>    

  )
}

export default Navbars