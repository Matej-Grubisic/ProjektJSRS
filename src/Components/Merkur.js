import {Link} from "react-router-dom";
import '../App.css';
import Merkur1 from '../merkur.jpg';




function Merkur() {
  return (
    <div className="merkur2">
        <p className="hmerkur">Merkur</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div class="div1">
            <a href="https://hr.wikipedia.org/wiki/Merkur" ><img src={Merkur1} className="slika1"></img></a>
            <p>Merkur, planet najbliži Suncu; vrlo izdužene staze, kojoj numerički ekscentricitet iznosi 0,205, pa pokazuje relativistički zakret perihela. Maksimalna kutna udaljenost od Sunca iznosi 28° a to znači da se može golim okom vidjeti kao svijetla točka nalik zvijezdi odmah nakon zalaska Sunca u blizini zapadnog horizonta ili pred izlazak Sunca u blizini istočnog horizonta. Gledano teleskopski Merkur pokazuje faze slično kao Mjesec i Venera, s periodom od približno 116 dana.<br></br><br></br>
            U prosjeku je od Sunca udaljen 0,387 astronomskih jedinica (AJ) ili 57,91 mil. km, a približava se na 0,31 AJ ili udaljuje na 0,47 AJ. Oko Sunca obiđe za sideričku (u odnosu na zvijezde) godinu jednaku 88 d. Promjer mu je 4879,4 km, masa 0,055 Zemljine mase, srednja gustoća 5427 kg/m³. Os vrtnje okomita je na stazu. Okreće se vrlo sporo i njegov siderički dan traje 58,65 d, što iznosi 2/3 sideričke godine, dok mu sinodički (u odnosu na Sunce) dan traje 176 d. Zbog njegova karakteristična gibanja promatrač bi na Merkuru doživio dvostruk izlazak Sunca ili dvostruko podne. Merkur je gotovo tri puta manji od Zemlje, s površinskim ubrzanjem od 0,38 ubrzanja na Zemlji. Nema atmosferu u uobičajenom smislu, a zapaženi su plinovi vodik, helij i argon. Temperatura površine mijenja se od 100 K do 700 K.
            <br></br>
            <br></br>
            <br></br>
            <h3 className="h3merkur">Promatranja</h3>

            <p>Dio Merkurove površine snimile su letjelice Mariner 10 (1974. i 1975), i Messenger (2008–15). Površina mu je prekrivena udarnim kraterima i malim »morima«, te jako nalikuje Mjesečevoj površini: zbog jače privlačne sile, krateri su mu zbijeniji. Najveća je zaravan Caloris Planitia (Ravnica vrućine) promjera 1550 km okružena planinskim lancem Caloris Montes visokim 2 km. Na kori se vide ostatci velikih pomaka i stezanja planetnoga tijela uzrokovanoga hlađenjem. Središte mu se sastoji pretežno od metala (procjenjuje se da je omjer željeza prema stijeni 70 : 30) i ima slabo magnetno polje. U naizmjeničnim vremenskim razmacima od 7 i 13 godina vidi se kako prelazi preko Sunčeva kruga (tranzit).</p>
            

            </p>
        </div>
    </div>
  );
}

export default Merkur;