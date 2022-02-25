import NavBar from "./layout/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//  import itemlistcontainer from "../src/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <NavBar></NavBar>
        <HeroContainer />
        <ItemListContainer />

        {/* <itemlistcontainer greeting="Bienvenido a mi Tienda " /> */}
      </>
    </div>
  );
}

export default App;
