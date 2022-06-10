import "./App.css";
import Header from "./components/Header/Header";
import PokemonCard from "./components/Pokemon/PokemonCard/PokemonCard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PokemonCard></PokemonCard>
    </div>
  );
}

export default App;
