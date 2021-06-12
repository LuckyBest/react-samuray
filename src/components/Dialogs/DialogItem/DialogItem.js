import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
      <div className={classes.dialog}>
        <div className={classes.avatar}>
          <img src={props.photo} />
        </div>
        <div className={classes.userName}>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default DialogItem;
