import React, { useState } from "react";
import styles from "./Menu.module.scss";
import Links from "./Links/Links";
import Transition from "../TransitionContainers/Transition/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon}>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} />
      </div>
      <Transition isShow={showMenu} className="fade">
        <Links setShowMenu={setShowMenu} />
      </Transition>
    </div>
  );
};

export default Menu;
