import React from "react";
import classes from "./SideDrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/_Aux/_Aux";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}></div>
    </Aux>
  );
};

export default sideDrawer;
