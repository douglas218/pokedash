import React from 'react';

const PokeStats = ({ pokemon }) => {

  function sortStats() {
    pokemon.stats.sort((a, b) => a.stat.name > b.stat.name ? 1 : -1 );
  }

  /* ordena os stats em ordem alfabética */
  sortStats();

  return (
    <table className="pokestats">
      <tbody>
        { pokemon.stats.map((stat, i) => { 
            return (
              <tr key={i}>
                <th>{stat.stat.name}</th>
                <td>{stat.base_stat}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
    );
};

export default PokeStats;