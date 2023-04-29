import React from "react";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div>
      <nav
        class="navbar fixed-top navbar-light bg-light"
        className={styles.height}
      >
        <div class="container-fluid">
          <div className="navbar-brand c">
            <h3 className={styles.Heading}>
              <div className={styles.homelink}>Home/</div>
              <div className={styles.productslink}>Products/{props.pushnavbar}</div>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
