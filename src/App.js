import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
