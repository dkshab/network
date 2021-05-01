import "./sass/styles.scss";

import HeaderNonAuth from "./apps/NonAuthApp/static/HeaderNonAuth/HeaderNonAuth";
import HomeNonAuth from "./apps/NonAuthApp/static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./apps/NonAuthApp/static/NavBarNonAuth/NavBarNonAuth";

function App() {
  return (
    <div className="App">
      <HeaderNonAuth />
      <NavBarNonAuth />
      <main>
        <HomeNonAuth />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
