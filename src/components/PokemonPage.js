import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Intro.css"

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokemondb01.herokuapp.com/pokemon")
      .then((r) => r.json())
      .then(setPokemon);
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  const pokemonsToDisplay = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
     <a href="https://jaimeportfolio.herokuapp.com/">
        <div className="btn"><p className="p">X</p></div>
     </a>
      <Link to="/">  
      <div className="btn2">
       <p>X</p>
        </div>
     </Link>
      <h1>Pokemon Searcher</h1>
      <br /><p>* Data may take a few seconds to fetch *</p>

      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
    

      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay} />

    </Container>
  );
}

export default PokemonPage;