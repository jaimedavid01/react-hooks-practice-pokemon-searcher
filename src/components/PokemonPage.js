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
    fetch("http://localhost:3001/pokemon")
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
      <Link to="/">  
        <div className="btn">
            <p>X</p>
        </div>
     </Link>
      <Link to="/">  
      <div className="btn2">
       <p>X</p>
        </div>
     </Link>
      <h1>Pokemon Searcher</h1>
      <br />

      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
    

      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay} />

    </Container>
  );
}

export default PokemonPage;