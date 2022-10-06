import React from "react";
import styles from "./PokemonList.module.scss";
import Transition from "../TransitionContainers/Transition/Transition";
import PokemonItem from "./PokemonItem/PokemonItem";
import { useGetAllPokemonsQuery } from "../../redux/apis/pokemon";

const PokemonList = () => {
  const { data: pokemonList, isSuccess } = useGetAllPokemonsQuery();

  return (
    <Transition defaultShow={true} className='scaleFade'>
      <div className={styles.container}>
        <div className={styles.listWrapper}>
          {isSuccess &&
            pokemonList.map((pokemon) => (
              <PokemonItem
                key={pokemon._id}
                pokemon={pokemon}
                trueFalse={pokemon.order === 1 ? true : false}
              />
            ))}
        </div>
      </div>
    </Transition>
  );
};

export default PokemonList;
