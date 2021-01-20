import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import Basket from "./components/ basket/basket";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' render={()=> <Main />}/>
          <Route exact path='/menu' render={()=> <Menu />}/>
          <Route exact path='/basket' render={()=> <Basket />}/>
          <Route exact path='/aboutus' render={()=> <AboutUs/>}/>
        </Switch>
      </Router>
  );
}

export default App;
