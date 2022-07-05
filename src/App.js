import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/Pokemon/PokemonDetail/PokemonDetail";
import ListPokemon from "./components/Pokemon/ListPokemon/ListPokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<p>404 NOT Found</p>} />
        <Route path="/" element={<ListPokemon />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
