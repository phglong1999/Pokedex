import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PokeDetail from "./Page/PokeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<PokeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
