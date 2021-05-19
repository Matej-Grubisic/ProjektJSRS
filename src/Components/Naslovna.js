import {Link} from "react-router-dom";
import '../App.css';
import Slika from '../planeti.png';
import Header from "../Header";
import Footer from "../Footer";



function Naslovna() {
  return (
    <div className="naslovna">
    <Header></Header>
    <img src={Slika} className="centriraj"></img>
    <p className="sunce1"><Link to="/Sunce" className="link10">Sunce</Link></p>
    <p className="merkur1"><Link to="/Merkur" className="link10">Merkur</Link></p>
    <p className="venera1"><Link to="/Venera" className="link10">Venera</Link></p>
    <p className="zemlja1"><Link to="/Zemlja" className="link10">Zemlja</Link></p>
    <p className="mjesec1"><Link to="/Mjesec" className="link10">Mjesec</Link></p>
    <p className="mars1"><Link to="/Mars" className="link10">Mars</Link></p>
    <p className="jupiter1"><Link to="/Jupiter" className="link10">Jupiter</Link></p>
    <p className="saturn1"><Link to="/Saturn" className="link10">Saturn</Link></p>
    
    <Footer></Footer>
    </div>
  );
}

export default Naslovna;
