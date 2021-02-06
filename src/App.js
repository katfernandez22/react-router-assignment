import './App.css';
import Home from './components/Home'
import Planets from './components/Planets'
import PlanetDetail from './components/PlanetDetail'
import RandomPlanet from './components/RandomPlanet'
import {BrowserRouter as Router , Switch , Route , Link} from "react-router-dom";


function App() {
  return (
      <div>
      <div className="header-top">
          <ul className="top-bar">
              <Link to="/"> <li>Home</li> </Link>
              <Link to="/planets"> <li>Planets </li> </Link>
              <Link to="/randomPlanet"><li>Random Planet</li> </Link>
          </ul>
      </div>

              <div className="content">
                  <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/planets" component={Planets} />
                      <Route path="/planets-detail" component={PlanetDetail} />
                      <Route path="/randomPlanet" component={RandomPlanet} />
                  </Switch>
              </div>

      </div>

    );
}

export default App;
