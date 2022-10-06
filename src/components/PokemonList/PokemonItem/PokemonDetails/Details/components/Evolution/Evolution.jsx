import React from "react";
import styles from "./Evolution.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import TransitionDelay from "../../../../../../TransitionContainers/TransitionDelay/TransitionDelay";

const Evolution = ({ evolutionChain }) => {
  return (
    <div className={styles.container} style={{ "--j": evolutionChain.length }}>
      {evolutionChain.map((pokemon, index) => (
        <TransitionDelay
          defaultShow={true}
          timeout={200 * index}
          className="fade"
        >
          <div key={pokemon.name} className={styles.imgWrapper}>
            <img src={pokemon.imgSrc} alt="pokemon" />
            {index + 1 !== evolutionChain.length ? (
              <div className={styles.arrowIcon}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </TransitionDelay>
      ))}
    </div>
  );
};

export default Evolution;
