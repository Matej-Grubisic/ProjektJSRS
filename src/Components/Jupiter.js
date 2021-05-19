import {Link} from "react-router-dom";
import '../App.css';
import Jupiter1 from "../jupiter.jpg";



function Jupiter() {
  return (
    <div className="jupiter2">
        <p className="hjupiter">Jupiter</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1">
        <a href="https://hr.wikipedia.org/wiki/Jupiter"><img src={Jupiter1} className="slika1"></img></a>
          <p>Jupiter, planet s najvećim promjerom i najvećom masom u Sunčevu sustavu, peti po udaljenosti od Sunca (prosječna udaljenost 778 milijuna kilometara). Po izduljenoj kružnoj putanji (ekscentricitet 0,0489) obiđe Sunce za 11,862 god. Okrene se oko svoje osi za 9,926 sati. Blagog je sjaja (albedo 0,538).
Tijelo mu je splošteno (ekvatorski promjer 142 984 km, polarni promjer 133 708 km). Masa mu je 318,4 puta veća od Zemljine, a gustoća mu je samo oko 1/4 gustoće Zemlje. Velik dio volumena tvori vodik, koji zbog velike mase i gravitacije Jupiter nije izgubio od postanka Sunčeva sustava (4,6 mlrd. god.), kao što se zbilo s drugim planetima. Prema astronomskim ispitivanjima, podatcima te prema teorijskoj obradbi, Jupiter se sastoji od razmjerno malene silikatne jezgre, okružene dvama slojevima tekućega vodika; donji sloj, pod većim tlakom, ima metalna svojstva, tj. vodikovi su elektroni u slabo vezanom ili u slobodnom stanju; gornji je sloj tekući vodik u molekularnom stanju (H2). Iznad površine nalazi se atmosfera debljine oko 1000 km (1/70 polumjera planeta). U atmosferi je utvrđena prisutnost vodika, metana, helija, amonijaka, amonijeva hidrosulfida i smrznute vode. Pretpostavlja se da postoje i drugi spojevi (vodikov sulfid, različiti organski spojevi, kompleksni anorganski polimeri).<br></br>
</p>
          <h3 className="h3j">Promatranja</h3>
          <p>
          Atmosfera, koja se zbog njezine gustoće sa Zemlje jedino i vidi, raslojena je u pojase i zone. Rotacija mu je nejednolika: na ekvatoru jedan okret traje 9 h 50 min 30 s, a na 10° sjeverne ili južne širine 9 h 55 min 41 s. Velika crvena pjega koja se nalazi 22° južno od Jupiterova ekvatora je anticiklonska oluja. Sustavno se opaža od 1830., a vjeruje se da ju je prvi primijetio Jean-Dominique Cassini 1665.

Jupiter ima oko 10 puta veće magnetsko polje od Zemlje. U njegovoj su atmosferi zamjetljive meteorološke i magnetske pojave slične onima na Zemlji, ali mnogo veće raširenosti i trajanja (npr. oluje slične tropskim ciklonima, polarna svjetlost).
          </p>
          
        </div>
    </div>
  );
}

export default Jupiter;