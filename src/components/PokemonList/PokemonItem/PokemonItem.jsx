import React, { useState } from "react";
import styles from "./PokemonItem.module.scss";
import PokemonDetails from "./PokemonDetails/PokemonDetails";
import Transition from "../../TransitionContainers/Transition/Transition";

const PokemonItem = ({ pokemon, trueFalse }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { types, imgSrc, name } = pokemon;
  return (
    <div
      className={styles.container}
      style={{ background: types[0].type.color }}
      onClick={() => setShowDetails(true)}
    >
      <div className={styles.imgWrapper}>
        <img src={imgSrc} alt="pokemon" />
      </div>
      <h2>{`${name[0].toUpperCase()}${name.slice(1)}`}</h2>
      <Transition isShow={showDetails} className="scaleFade">
        <PokemonDetails pokemon={pokemon} closeDetails={setShowDetails} />
      </Transition>
      {/* {trueFalse && (
        <PokemonDetails pokemon={pokemon} closeDetails={setShowDetails} />
      )} */}
    </div>
  );
};

export default PokemonItem;
