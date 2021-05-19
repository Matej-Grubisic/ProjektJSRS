import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Naslovna from "./Components/Naslovna";
import Sunce from "./Components/Sunce";
import Merkur from "./Components/Merkur";
import Venera from "./Components/Venera";
import Zemlja from "./Components/Zemlja";
import Mjesec from "./Components/Mjesec";
import Mars from "./Components/Mars"; 
import Jupiter from "./Components/Jupiter";
import Saturn from "./Components/Saturn";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path='/' component={Naslovna}></Route>
        <Route path='/Sunce' component={Sunce}></Route>
        <Route path='/Merkur' component={Merkur}></Route>
        <Route path='/Venera' component={Venera}></Route>
        <Route path='/Zemlja' component={Zemlja}></Route>
        <Route path='/Mjesec' component={Mjesec}></Route>
        <Route path='/Mars' component={Mars}></Route>
        <Route path='/Jupiter' component={Jupiter}></Route>
        <Route path='/Saturn' component={Saturn}></Route>
      </Router>      
    </div>
  );
}

export default App;
