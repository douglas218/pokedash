import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import PokeType from './PokeType'
import PokeStats from './PokeStats'
import PokeAbilities from './PokeAbilities'

const PokeCard = ({ data }) => {
  //console.log(data);

  let pokeType = getPokeType(data);

  function getPokeType(pokemon) {
    let firstType = pokemon.types.filter(p => p.slot === 1);
    return firstType[0].type.name;
  }

  return (
    <Card className={`pokecard pokecard-${pokeType}`}>
      <div className="poke-image-container">
        <Card.Img variant="top" src={data.sprites.front_default} />
      </div>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <PokeType pokeType={pokeType}></PokeType>
        <PokeStats pokemon={data}></PokeStats>
        <PokeAbilities pokemon={data}></PokeAbilities>
      </Card.Body>
    </Card>
  );
};

// PokeCard.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       sprites: PropTypes.shape({
//         front_default: PropTypes.string,
//       }),
//       name: PropTypes.string,
//     })
//   ).isRequired,
// };

export default PokeCard;