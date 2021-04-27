import "./sass/styles.scss";

import Footer from "./apps/NonAuthApp/static/Footer/Footer";
import Header from "./apps/NonAuthApp/static/Header/Header";
import Home from "./apps/NonAuthApp/static/Home/Home";
import NavBar from "./apps/NonAuthApp/static/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
