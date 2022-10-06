import React from "react";
import styles from "./About.module.scss";

const formattedString = (string) =>
  `${string[0].toUpperCase()}${string.slice(1)}`;

const About = ({ info }) => {
  const formattedInfo = {
    weight: `${info.weight / 10}kg`,
    height: `${info.height / 10}m`,
    shape: formattedString(info.shape),
    habitat: formattedString(info.habitat),
    "egg group": info.egg_groups
      .map((item) => formattedString(item))
      .join(", "),
    "growth rate": formattedString(info.growth_rate),
  };

  return (
    <div className={styles.container}>
      {Object.keys(formattedInfo).map((name, index) => (
        <div key={name} className={styles.listItem}>
          <div className={styles.name}>{formattedString(name)}</div>
          <div>{Object.values(formattedInfo)[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default About;
