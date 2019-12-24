import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from '../SideDrawer/SideDrawer.module.css';
import Backdrop from '../SideDrawer/SideDrawer';
import Aux from '../../../hoc/Aux';
const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
