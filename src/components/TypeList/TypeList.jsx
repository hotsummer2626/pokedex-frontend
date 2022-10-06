import React from "react";
import styles from "./TypeList.module.scss";
import Transition from "../TransitionContainers/Transition/Transition";
import TypeItem from "./TypeItem/TypeItem";
import { useGetAllTypesQuery } from "../../redux/apis/type";

const TypeList = () => {
  const { data: typeList, isSuccess } = useGetAllTypesQuery();

  return (
    <Transition defaultShow={true} className='scaleFade'>
      <div className={styles.container}>
        {isSuccess &&
          typeList.map((type) => <TypeItem key={type._id} type={type} />)}
      </div>
    </Transition>
  );
};

export default TypeList;
