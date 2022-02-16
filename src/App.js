// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <>
        <NavBar></NavBar>

        <ItemListContainer></ItemListContainer>
      </>
    </div>
  );
}

export default App;
