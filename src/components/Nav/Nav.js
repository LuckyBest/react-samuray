import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/messages" Messages activeClassName={classes.active}>
            Messages
          </NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/news" activeClassName={classes.active}>
            News
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>
            Music
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" Messages activeClassName={classes.active}>
            Settings
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};
export default NavBar;
