import React from "react";
import styles from "./Menu.module.scss";

const menuNames = ["About", "Base Stats",'Evolution'];

const Menu = ({ currentDetail, setCurrentDetail }) => {
  return (
    <div className={styles.container}>
      {menuNames.map((name) => (
        <h3
          key={name}
          className={currentDetail === name ? styles.active : ""}
          onClick={() => setCurrentDetail(name)}
        >
          {name}
        </h3>
      ))}
    </div>
  );
};

export default Menu;
