import NavBar from "./layout/NavBar/NavBar";
import HeroContainer from "./components/Container/HeroContainer/HeroContainer";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <HeroContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
