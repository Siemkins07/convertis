import React, { useState } from "react";
import classes from "./Header.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Aux from "../../hoc/_Aux/_Aux";

const Header = (props) => {
  const [srcLogo, setSrcLogo] = useState("");

  return (
    <Aux>
      <div className={classes.HeaderComponentContainer}>
        <div className={classes.HeaderContainer}>
          <div className={classes.Search}>
            <input
              className={classes.Search}
              type="search"
              placeholder="szukajka"
            />
            <span className={classes.SearchSpan} />
            <hr />
          </div>
          <div className={classes.Logo}>
            {srcLogo ? <img src={srcLogo} alt="logo" /> : <p>logo</p>}
          </div>
          <div className={classes.List}>
            <ul>
              <li>
                <span></span>
                <a href="#">Ulubione</a>
              </li>
              <li>
                <span></span>
                <a href="#"> Konto</a>
              </li>
              <li>
                <span></span>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavMenu />
    </Aux>
  );
};

export default Header;
