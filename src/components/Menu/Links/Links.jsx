import React, { useState } from "react";
import styles from "./Links.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TransitionDelay from "../../TransitionContainers/TransitionDelay/TransitionDelay";
import Transition from "../../TransitionContainers/Transition/Transition";

const links = [
  {
    id: 1,
    name: "Types Table",
    path: "/",
  },
  {
    id: 2,
    name: "Pokemons",
    path: "/pokemons",
  },
];

const Links = ({ setShowMenu }) => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const onCloseHandler = () => {
    setShowLinks(false);
    setShowMenu(false);
  };
  return (
    <Backdrop>
      <Transition
        defaultShow={true}
        isShow={showLinks}
        setIsShow={setShowLinks}
        className="rightInRightOut"
      >
        <div className={styles.container}>
          <div className={styles.closeIcon}>
            <FontAwesomeIcon icon={faArrowRight} onClick={onCloseHandler} />
          </div>
          <div className={styles.linksWrapper}>
            {links.map((link, index) => (
              <TransitionDelay
                key={link.id}
                timeout={100 * (index + 1)}
                defaultShow={true}
                className="rightInRightOut"
              >
                <Link
                  className={`${styles.link} ${
                    location.pathname === link.path ? styles.active : ""
                  }`}
                  to={link.path}
                  onClick={onCloseHandler}
                >
                  {link.name}
                </Link>
              </TransitionDelay>
            ))}
          </div>
        </div>
      </Transition>
    </Backdrop>
  );
};

export default Links;
