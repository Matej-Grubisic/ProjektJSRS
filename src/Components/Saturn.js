import {Link} from "react-router-dom";
import '../App.css';
import Saturn1 from "../saturn.jpg";



function Saturn() {
  return (
    <div className="saturn2">
        <p className="hsaturn">Saturn</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div class="div1">
          <a href="https://hr.wikipedia.org/wiki/Saturn"><img src={Saturn1} className="slika1"></img></a>
          <p>Saturn, šesti planet po udaljenosti od Sunca, vidljiv sa Zemlje prostim okom i zato poznat od davnine. Najmanje je gustoće i s najvećim prstenom, drugi po masi u Sunčevu sustavu. Po izduljenoj kružnoj putanji (ekscentricitet 0,0565) obiđe Sunce za 29,5 godina na srednjoj udaljenosti 9,554 astronomskih jedinica. Okrene se oko svoje osi za 10,65 sati. Blagog je sjaja (albedo 0,499) obiđe Sunce za 29,5 godina na srednjoj udaljenosti 9,554 astronomskih jedinica. Okrene se oko svoje osi za 10,65 sati. Blagog je sjaja (albedo 0,499).<br></br><br></br>
          Tijelo mu je znatno splošteno (ekvatorski promjer 120 536 km, polarni promjer 108 728 km). Masa mu je 95 puta veća od Zemljine. Jedini je planet kojega je gustoća manja od gustoće vode (687 kg/m³). Sastoji se pretežno od vodika i helija. Nema čvrstu površinu. Ispod plinovite atmosfere prostire se sloj molekularnoga vodika s nešto zamrznute tvari (u kojoj ima tragova metana, amonijaka i dr.), zatim sloj metalnoga vodika, te središte sa stjenovitom jezgrom. Temperatura je u središtu vrlo visoka (12 000 K), pa je to Saturnov izvor energije usporediv s energijom koju prima Sunčevim zračenjem; temperature oblačnoga sloja iznosi –130 °C, dok bi temperatura samo zbog doprinosa Sunčeva zračenja bila –170 °C.
          
          </p>
          <h3 className="h3saturn">Promatranja</h3>
          <p>U atmosferi se primjećuju svjetliji i tamniji oblaci usporedni s ekvatorom, manje istaknuti nego kod Jupitera, jer se, zbog niže temperature, stvaraju bliže središtu planeta. Među oblacima se opažaju vrtlozi, kao Velika bijela pjega. Infracrveno zračenje otkriva topliji polarni vrtlog, tzv. vruću pjegu. Brzina vjetra iznosi do 500 m/s. U ekvatorskom području planet se vrti s periodom od 10 h 14 min, a središte se, prema podatcima prikupljenima uz pomoć radiovalova, vrti s periodom od 10 h 39 min 22 s. Saturn ima prostrano magnetsko polje, kojega je magnetski moment 600 puta veći od Zemljina, a magnetska indukcija na površini iznosi oko 50 μT.
          </p>
        </div>
    </div>
  );
}

export default Saturn;