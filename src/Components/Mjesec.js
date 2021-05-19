import {Link} from "react-router-dom";
import '../App.css';
import Mjesec1 from '../mjesec.jpg';
import Dijete from "./Dijete";


function Mjesec() {
  const covjek1 = {
    ime: "Neil",
    prezime: "Armstrong"
}

const covjek2 = {
    ime: "Buzz",
    prezime: "Aldrin"
}

const covjek3 = {
    ime: "Pete",
    prezime: "Conrad"
}

const covjek4 = {
    ime: "Alan",
    prezime: "Bean"
}

const covjek5 = {
    ime: "Alan",
    prezime: "Shepard"
}

const covjek6 = {
    ime: "Edgar",
    prezime: "Mitchell"
}

const covjek7 = {
    ime: "David",
    prezime: "Scott"
}

const covjek8 = {
    ime: "James",
    prezime: "Irwin"
}

const covjek9 = {
    ime: "John",
    prezime: "Young"
}

const covjek10 = {
    ime: "Charles",
    prezime: "Duke"
}

const covjek11 = {
    ime: "Gene",
    prezime: "Cernan"
}

const covjek12 = {
    ime: "Harrison",
    prezime: "Schmitt"
}
  return (
    <div className="mjesec2">
        <p className="hmjesec">Mjesec</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1">
        <a href="https://hr.wikipedia.org/wiki/Mjesec"><img src={Mjesec1} class="slika1"></img></a>
        <p>Mjesec, Zemljin prirodni satelit. Gledano sa Zemlje, najsjajnije nebesko tijelo nakon Sunca, svjetlost kojega odražava. Puni Mjesec prividne je magnitude –12,7, albedo mu je 0,07, a promjer, koji iznosi 3647 km, kutne je udaljenosti približno 0,5°. Zemlji okreće stalno istu stranu, jer se obilazak i vrtnja odvijaju u istome smjeru, a vremena obilaska i okreta jednaka su, što je posljedica Zemljina plimnog utjecaja. Staza mu je nagnuta prema ravnini ekliptike za 5°9´. Više od polovice površine Mjeseca vidi se zbog libracije. Mjesečeve mijene promjene su Mjesečeve osvijetljenosti tijekom sinodičkoga mjeseca (mlađak, prva četvrt, puni Mjesec ili uštap i posljednja četvrt), a nastaju zbog stalne promjene Mjesečeva položaja prema Zemlji i Suncu. Kada Mjesec uđe u Zemljinu sjenu, nastaje pomrčina Mjeseca, a kada dođe u spojnicu između Zemlje i Sunca, nastaje pomrčina Sunca. Privlačna sila Mjeseca (i Sunca) uzrokuje na Zemlji morske mijene (plimu i oseku). Svojom privlačnošću Mjesec utječe na Zemljinu stazu oko Sunca.<br></br><br></br>
        
        </p>
        <h3 className="h3mjesec">Ljudi koji su bili na mjesecu:</h3>
        <p> <Dijete slanje={covjek1} slanje2={covjek2} slanje3={covjek3} slanje4={covjek4} slanje5={covjek5} slanje6={covjek6} slanje7={covjek7} slanje8={covjek8} slanje9={covjek9} slanje10={covjek10} slanje11={covjek11} slanje12={covjek12}> </Dijete> </p>
        </div>
    </div>
  );
}

export default Mjesec;