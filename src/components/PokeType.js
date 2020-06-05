import React from 'react';

const PokeType = ({ pokeType }) => {

  return (
    <h3 className={`poketype poketype-${pokeType}`}>{pokeType}</h3>
  );
  
};

export default PokeType;