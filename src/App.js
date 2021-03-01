import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
