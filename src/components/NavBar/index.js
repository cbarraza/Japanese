import React, { Fragment, useState } from 'react';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
// Constants
import { PRIMARY_COLOR } from '../../constants/colors';
import sections from '../../constants/sections';

const NavBar = props => {
  const [ open, setOpen ] = useState(false);

  const onToggle = () => setOpen(!open);
  
  return (
    <Fragment>
      <AppBar position='fixed' style={{ backgroundColor: PRIMARY_COLOR }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClose={onToggle}>
        <List>
          {
            sections.map(section => (
              <Link color='inherit' href={section.url} key={section.key} underline='none'>
                <ListItem button>
                  <ListItemText>{section.label}</ListItemText>
                </ListItem>
              </Link>
            ))
          }
        </List>
      </Drawer>
    </Fragment>
  );
};

export default NavBar;
