import React, { useState } from "react";
import styles from "./Details.module.scss";
import Menu from "./components/Menu/Menu";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import About from "./components/About/About";
import BaseStats from "./components/BaseStats/BaseStats";
import Evolution from "./components/Evolution/Evolution";

const Details = ({
  weight,
  height,
  shape,
  growth_rate,
  habitat,
  egg_groups,
  base_stats,
  evolution_chain,
}) => {
  const [currentDetail, setCurrentDetail] = useState("About");
  const about = { weight, height, shape, growth_rate, habitat, egg_groups };
  const baseStats = { baseStats: base_stats };
  const evolutionChain = { evolutionChain: evolution_chain };

  const displayDetails = {
    about: <About info={about} />,
    "base stats": <BaseStats {...baseStats} />,
    evolution: <Evolution {...evolutionChain} />,
  };
  return (
    <div className={styles.container}>
      <Menu currentDetail={currentDetail} setCurrentDetail={setCurrentDetail} />
      <SwitchTransition mode="out-in">
        <CSSTransition key={currentDetail} classNames={styles} timeout={200}>
          {displayDetails[currentDetail.toLowerCase()]}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Details;
