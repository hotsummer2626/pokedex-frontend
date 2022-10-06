import React, { useState, useEffect } from "react";
import styles from "./BaseStats.module.scss";
import { CSSTransition } from "react-transition-group";

const fotmattedStatsName = {
  hp: { abbr: "HP", color: "#fe0100" },
  attack: { abbr: "ATK", color: "#ef7e30" },
  defense: { abbr: "DEF", color: "#f8d02f" },
  "special-attack": { abbr: "SATK", color: "#688ff2" },
  "special-defense": { abbr: "SDEF", color: "#78c751" },
  speed: { abbr: "SPD", color: "#f85687" },
};

const BaseStats = ({ baseStats }) => {
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    setShowDetails(true);
  }, []);
  return (
    <div className={styles.container}>
      {baseStats.map((stat) => (
        <div key={stat.name} className={styles.listItem}>
          <div className={styles.name}>
            {fotmattedStatsName[stat.name].abbr}
          </div>
          <div className={styles.barWrapper}>
            <CSSTransition
              in={showDetails}
              timeout={400}
              classNames={styles}
              unmountOnExit
            >
              <div
                className={styles.bar}
                style={{
                  background: fotmattedStatsName[stat.name].color,
                  "--i": `${stat.value / 3}%`,
                }}
              ></div>
            </CSSTransition>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BaseStats;
