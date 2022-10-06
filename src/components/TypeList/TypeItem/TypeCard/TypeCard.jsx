import React from "react";
import styles from "./TypeCard.module.scss";

const TypeCard = ({ type, onClickHander }) => {
  return (
    <div
      className={styles.container}
      style={{ background: type.color }}
      onClick={onClickHander}
    >
      <div className={styles.imgWrapper}>
        <img src={type.imgSrc} alt="type" />
      </div>
      <div className={styles.name}>{type.name.toUpperCase()}</div>
    </div>
  );
};

export default TypeCard;
