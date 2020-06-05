import React from 'react';

const PokeAbilities = ({ pokemon }) => {

  var defaultAbility = pokemon.abilities.filter(a => a.is_hidden == false);
  if (defaultAbility.length > 0)
    defaultAbility = defaultAbility[0].ability.name;
  else
    defaultAbility = '';


  var hiddenAbility = pokemon.abilities.filter(a => a.is_hidden == true);
  if (hiddenAbility.length > 0)
    hiddenAbility = hiddenAbility[0].ability.name;
  else
    hiddenAbility  = '';
 
  return (
    <div className="poke-abilities">
      <h4 className="poke-ability">
        <span className="poke-ability-label">Ability</span>
        <span className="poke-ability-name">{ defaultAbility }</span> {/* Run Away */}
      </h4>
      <h4 className="poke-ability">
        <span className="poke-ability-label">Hidden Ability</span>
        
        <span className="poke-ability-name">{ hiddenAbility }</span> {/* Anticipation */}
      </h4>
    </div>
  );
  
};

export default PokeAbilities;