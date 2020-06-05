import React from 'react';

const PokeAbilities = ({ pokemon }) => {

  return (
    <div className="poke-abilities">
      <h4 className="poke-ability">
        <span className="poke-ability-label">Ability</span>
        Run Away
      </h4>
      <h4 className="poke-ability">
        <span className="poke-ability-label">Hidden Ability</span>
        Anticipation
      </h4>
    </div>
  );
  
};

export default PokeAbilities;