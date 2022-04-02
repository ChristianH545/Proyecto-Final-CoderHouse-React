import NavBar from "./layout/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
