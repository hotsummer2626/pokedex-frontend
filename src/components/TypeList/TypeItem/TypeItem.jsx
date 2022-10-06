import React, { useState } from "react";
import Transition from "../../TransitionContainers/Transition/Transition";
import TypeCard from "./TypeCard/TypeCard";
import DamageRelationship from "./DamageRelationship/DamageRelationship";

const TypeItem = ({ type }) => {
  const [showRelationship, setShowRelationship] = useState(false);

  return (
    <>
      <TypeCard type={type} onClickHander={() => setShowRelationship(true)} />
      <Transition isShow={showRelationship} className="fade">
        <DamageRelationship
          type={type}
          setShowRelationship={setShowRelationship}
        />
      </Transition>
    </>
  );
};

export default TypeItem;
