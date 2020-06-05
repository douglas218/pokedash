import React, { useState } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import PokeCard from './components/PokeCard';
import Header from './components/Header';
import './App.css';

function App() {
  const [ pokemonList, setPokemonList ] = useState([]);

  async function buscaPokemons() {

    /* Acessa a 1a API para buscar o nome de 50 Pokemons */
    const pokemonNames = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.data.results);
      
    /* Para cada um dos 50 pokemons retornados, acessa a 2a API para buscar todos os dados do pokemon */
    const promises = pokemonNames.map(async (p) => {
      const r = await axios.get(p.url).then((rp) => rp.data);
      return r;
    });

    /* Aguarda todas as promises concluírem */
    const pokemonDados = await Promise.all(promises);

    /* Armazena o resultado no state */
    setPokemonList(pokemonDados);
  };

  buscaPokemons();
  
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <button type="button" onClick={buscaPokemons}>Clique aqui para carregar</button> */}
      <Container fluid>
        <CardColumns>
          { /* Monta um "PokeCard" para cada Pokemon */
            pokemonList.map(pokemon => { 
              return (
                <PokeCard key={pokemon.name} data={pokemon} />
              );
          })}
        </CardColumns>
      </Container>      
    </div>
  )
}

export default App;


// Utilizar create-react-app.
// Adicionar axios ao projeto para consumir a API.
// Utilizar react-bootstrap para renderizar o objeto retornado do axios.
// Trazer 50 registros na api https://pokeapi.co/api/v2/pokemon?limit=50
// Obter informações de cada e renderizar em cards com os dados (nome, imagem, etc) https://pokeapi.co/api/v2/pokemon/nome_do_pokemon
// Criar detalhe ao clicar no card (bônus)
