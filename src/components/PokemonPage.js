import {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm]= useState(""); //set state for search

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then(setPokemon);
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon,newPokemon]);
  } // create function handler to use state function to add new pokemon to the pokemon array, using spread syntax to reference CURRENT array, and newPokemon for additions

  const pokemonsToDisplay = pokemon.filter((poke) =>
  poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); //create function to ignore capitilization in search

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon} />
      <br />
      <Search searchTerm ={searchTerm} onChangeSearch = {setSearchTerm}/>
      <br />
      <PokemonCollection pokemon ={pokemonsToDisplay}/>
    </Container>
  );
}
// pass props of searchTerm state variable and setSearchTerm function to Search component 
// pass props of event handler for adding pokemon
export default PokemonPage;