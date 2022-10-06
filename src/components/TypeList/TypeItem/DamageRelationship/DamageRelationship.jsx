import React, { useState, useEffect } from "react";
import styles from "./DamageRelationship.module.scss";
import Transition from "../../../TransitionContainers/Transition/Transition";
import Backdrop from "../../../Backdrop/Backdrop";
import TypeCard from "../TypeCard/TypeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DamageRelationship = ({ type, setShowRelationship }) => {
  const [showStrength, setShowStrength] = useState(false);
  const [showWeakness, setShowWeakness] = useState(false);
  const [isModelShow, setIsModelShow] = useState(false);

  useEffect(() => {
    if (type.double_damage_to.length !== 0) {
      setShowStrength(true);
    }
    if (type.double_damage_from.length !== 0) {
      setShowWeakness(true);
    }
  }, []);

  const closeModelHandler = () => {
    setIsModelShow(false);
    setShowRelationship(false);
  };

  return (
    <Backdrop className={styles.outer}>
      <Transition
        defaultShow={true}
        isShow={isModelShow}
        setIsShow={setIsModelShow}
        className="scaleFade"
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.imgWrapper}>
              <img src={type.imgSrc} alt="type" />
            </div>
            <div className={styles.closeIcon}>
              <FontAwesomeIcon icon={faXmark} onClick={closeModelHandler} />
            </div>
          </div>
          {showStrength && (
            <div className={styles.strength}>
              <h3>Strength</h3>
              <div className={styles.typeList}>
                {type.double_damage_to.map((type) => (
                  <TypeCard key={type.name} type={type} />
                ))}
              </div>
            </div>
          )}
          {showWeakness && (
            <div className={styles.weakness}>
              <h3>Weakness</h3>
              <div className={styles.typeList}>
                {type.double_damage_from.map((type) => (
                  <TypeCard key={type.name} type={type} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Transition>
    </Backdrop>
  );
};

export default DamageRelationship;
