import React from "react";
import classes from "./NavMenu.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const navMenu = (props) => {
  return (
    <div className={classes.NavMenu}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <ul className={classes.NavMenuList}>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
        <li className={classes.NavMenuListItem}>
          <a href="">Link menu</a>
        </li>
      </ul>
    </div>
  );
};
export default navMenu;
