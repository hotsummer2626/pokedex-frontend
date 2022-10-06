import React from "react";
import styles from "./PokemonDetails.module.scss";
import Backdrop from "../../../Backdrop/Backdrop";
import Details from "./Details/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const PokemonDetails = ({ pokemon, closeDetails }) => {
  const { types, name, imgSrc, order } = pokemon;
  return (
    <Backdrop>
      <div
        className={styles.container}
        style={{ background: types[0].type.color }}
      >
        <div className={styles.closeButton}>
          <FontAwesomeIcon icon={faXmark} onClick={() => closeDetails(false)} />
        </div>
        <div className={styles.header}>
          <div className={styles.name}>
            <h3>{`${name[0].toUpperCase()}${name.slice(1)}`}</h3>
            <div className={styles.typesWrapper}>
              {types.map((type) => (
                <span key={type.slot} style={{ background: type.type.color }}>
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.number}>{`#${order
            .toString()
            .padStart(3, "0")}`}</div>
        </div>
        <div className={styles.img}>
          <img src={imgSrc} alt="pokemon" />
        </div>
        <Details {...pokemon} />
      </div>
    </Backdrop>
  );
};

export default PokemonDetails;
