import {Link} from "react-router-dom";
import '../App.css';
import Venera1 from "../venera.jpg";




function Venera() {
  return (
    <div className="venera2">
        <p className="hvenera">Venera</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1">
        <a href="https://hr.wikipedia.org/wiki/Venera"><img src={Venera1} className="slika1"></img> </a>
        <p> 
        Venera, drugi planet po udaljenosti od Sunca, bez satelita, nešto manji od Zemlje (promjer 12 104 km). Na nebu je najsjajniji planet i pokazuje faze. Od Sunca se najviše udalji 47° pa se vidi ili uvečer kao Večernja zvijezda ili ujutro kao Danica. Os vrtnje gotovo je okomita na ravninu staze. Okreće se retrogradno (smjer dnevnoga prividnog gibanja Sunca suprotan je onomu na Zemlji) i najsporije od svih planeta; siderički period vrtnje traje 243,0 d i dulji je od godine, koja traje 224,7 d, dok Sunčev dan na Veneri traje 116,7 d, što je sumjerljivo s njezinom sinodičkom godinom od 583,9 d.<br></br><br></br>
        Venerinu atmosferu otkrio je Mihail Vasiljevič Lomonosov 1761. prilikom njezina tranzita (→ venerin prijelaz), kada je pri dodiru Sunčeva kruga ugledao prosvijetljenu atmosferu. Teleskopskim motrenjima nije se na Veneri, zbog guste atmosfere, moglo vidjeti tlo. Većina spoznaja o Veneri postignuta je s pomoću svemirskih letjelica, pa tako i točna vrijednost njezine mase (0,815 Zemljine mase). Prva se na njezino tlo spustila 1970. sovjetska letjelica Venera 7. Američke letjelice u orbiti Pioneer 12 (1978–92) i Magellan (1990–94) snimale su Venerin reljef s pomoću radara. Europska letjelica u orbiti Venus Express bilježila je podatke iz Venerine atmosfere (2005–15).
        </p>
        
        <h3 className="h3v">Promatranja</h3>
        <p>Venerina atmosfera 50 je puta gušća od Zemljine, sadrži 96,5% ugljikova dioksida i 3,5% dušika; manjinski su sastojci ugljikov monoksid (50 ppm), argon (70 ppm), voda (50 ppm), sumporov dioksid (60 ppm), kisik (do 20 ppm), klorovodik (0,5 ppm), fluorovodik (5 · 10–3 ppm). Tlak pri tlu iznosi 90 · 105 Pa, a temperatura 733 K (460 °C), što je posljedica efekta staklenika. Bez tog učinka, zbog velikoga faktora odraza (albeda) atmosfere (0,65), temperatura bi na površini bila oko –20 °C, iako je Suncu bliže nego Zemlja. Sloj oblaka od kapljica razrijeđene sumporne kiseline nalazi se na visini od 50 do 65 km i neproziran je; oblaci naglo nestaju s donje strane, gdje temperatura dostiže vrijednost pri kojoj se kapljice isparavaju. Tlak i temperatura Venerine atmosfere tek na visini od približno 50 km podudaraju se s uvjetima na površini Zemlje. Brzina je vjetra na tlu oko 1 m/s. Na vrhu oblaka brzina je vjetra do 300 km/h, pa oblačni sloj obiđe planet za približno 4 do 5 dana.    
        </p>
        </div>
    </div>
  );
}

export default Venera;