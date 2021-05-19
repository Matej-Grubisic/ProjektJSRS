import {Link} from "react-router-dom";
import '../App.css';
import Zemlja1 from "../zemlja.jpg";



function Zemlja() {
  return (
    <div className="zemlja2">
        <p className="hzemlja">Zemlja</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1">
          <a href="https://hr.wikipedia.org/wiki/Zemlja"><img src={Zemlja1} className="slika1"></img></a>
          <p>Zemlja, treći planet po redoslijedu udaljenosti od Sunca i najveći među unutarnjim planetima. Prosječno je od Sunca udaljen 149,6 milijuna km, što se uzima kao astronomska jedinica. Numerički ekscentricitet Zemljine staze iznosi 0,01679, zbog čega se Zemlja Suncu približi za 2,5 milijuna km (perihel, oko 4. siječnja) ili udalji za jednako toliko (afel, oko 4. srpnja). Ekscentricitet se u 100 000 god. mijenja za iznos od približno 0,0032 do 0,0057. S vremenom se mijenja i položaj Zemljine staze u ravnini gibanja, pa godišnji progradni zakret perihela (pomicanje u smjeru ophoda oko Sunca), potaknut utjecajem planeta i relativističkim učinkom, iznosi 11,63ʺ.<br></br><br></br>
          Zemlja obiđe Sunce za vrijeme sideričke (zvjezdane) godine, koja je jednaka 365,25636 d = 365 d 6 h 9 min 9,5 s, pri čem je dan jednak 86 400 s. Sunčeva ili tropska godina, koja je jednaka periodu izmjene godišnjih doba ili vremenu između dvaju uzastopnih prividnih prolazaka Sunca kroz proljetnu točku, traje 365,24220 d = 365 d 5 h 48 min 46 s, tj. 20 min 25 s kraća je od sideričke. Razlika je uzrokovana precesijom Zemljine osi, vrtnje koja se odvija obratno od rotacije Zemlje s periodom od 25 800 godina (Platonova godina). Godišnji iznos precesije ekvinokcija jest 50,29ʺ. Zbog periodične promjene položaja čvorova Mjesečeve putanje oko Zemlje pojavljuje se nutacija, kao nabori na precesijskom stošcu, s periodom od 18,66 god.
          </p>

          <h3 className="h3z">Promatranja</h3>

          <p>Zemlja ima oblik geoida, tijela slična rotacijskomu elipsoidu, kojemu je velika poluos (ekvatorski polumjer) 6378,388 km, a mala poluos (polarni polumjer) 6356,912 km. Opseg ekvatora iznosi 40 076,594 km, meridijanskoga kruga 40 009,152 km, površina Zemlje 510 100 933 km², volumen 1 083 319 780 000 km³, masa 5,976 ∙ 1024 kg, a prosječna gustoća 5525 kg/m³. Zemljina se unutrašnjost sastoji od više različito građenih sfera (ljuski). Idući od površine prema središtu, razlikuju se kora, plašt i jezgra. Razlikuju se kontinentalna kora (granitnoga sastava, debljina oko 40 km, u boranim pojasovima i deblja, gustoća 2700 kg/m³) i oceanska kora (bazaltnoga sastava, debljina oko 7 km, gustoća 2950 kg/m³). Zemljina kora zajedno s najvišim dijelom plašta čini litosferu, kojoj je masa 1,5% ukupne Zemljine mase. Plašt se sastoji od gornjega plašta (do 400 km dubine), prijelazne zone (400 do 1000 km) i donjega plašta (1000 do 2900 km). Gornji, plastičniji dio katkad se naziva astenosfera. Gustoća plašta iznosi 3300 do 6500 kg/m³, a masa 80% ukupne Zemljine mase. Drži se da je građen od peridotita. Zemljina jezgra (2900 do 6371 km) ima gustoću 9500 do 11 000 kg/m³. Sastavljena je pretežno od željeza s tragovima nikla i silikata, a čine ju vanjska jezgra (2900 do 4980 km), prijelazna zona (4980 do 5120 km) i unutarnja jezgra (5120 do 6371 km). Srednji je dio jezgre krut, a vanjski tekući. Vanjski su Zemljini omotači: vodena sfera (→ hidrosfera), plinoviti (→ atmosfera) i magn. omotač (→ magnetosfera).


            
          </p>

        </div>
    </div>
  );
}

export default Zemlja;