import {Link} from "react-router-dom";
import '../App.css';
import Sunce1 from "../sunce.jpg";



function Sunce() {
  return (
    <div className="sunce2">
        <p className="hsunce">Sunce</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1" align="center">

            <a href="https://hr.wikipedia.org/wiki/Sunce" ><img src={Sunce1} className="slika1"></img> </a>
            
            <p>Sunce je zvijezda oko koje obilazi Zemlja, središte Sunčeva sustava. Smješteno je u ekvatorskoj ravnini Mliječne staze, 26 000 svjetlosnih godina daleko od njezina središta, oko kojega obiđe za 230 milijuna godina brzinom od 230 km/s. Brzinom od 20 km/s giba se u smjeru zvijezde Vege.<br></br><br></br>
            Sunce je nastalo prije 4,65 milijardi godina kao treća zvjezdana generacija, skupljanjem međuzvjezdane tvari, kojoj se gustoća povećala potpomognuta vjerojatno udarnim valom bliske supernove. Složene atomske jezgre u Suncu i planetima, ne bi mogle, zbog relativno male mase Sunca, nastati nuklearnim procesima u Suncu. Danas Sunce zrači za trećinu više nego što je zračilo u početku, a porast se nastavlja, pa se smatra da će Zemlja postati nenastanjiva za manje od milijardu godina. Nakon 4 do 5 milijardi godina Sunce će jako povećati volumen i postati crvenim divom.
            </p>
            <br></br>
            <br></br>
            <br></br>   
            <h3 className="h3s">Promatranja</h3>
            
            <p>Sunce je žuta zvijezda spektralnoga razreda G2 i na glavnom nizu HR-dijagrama. Oblika je kugle s promjerom 1 392 000 km (109 Zemljinih promjera). Sunčev je volumen 1,3 milijuna puta veći od Zemljina. Mase je 1,9891 · 1030 kg, 750 puta više od svih planeta zajedno, a 333 000 puta veće od Zemlje. Prosječne je gustoće 1400 kg/m³ (oko 1/4 gustoće Zemlje). Zrači snagom od 3,83 · 1026 W i ima efektivnu temperaturu vanjskoga sloja atmosfere (fotosfere) od 5770 K. Sastoji se od ioniziranoga plina. Većina poznatih kemijskih elemenata otkrivena je i na Suncu. Dva su elementa najobilnija: 74% Sunčeve mase čini vodik, 24% helij. U središtu Sunca, gdje se nalazi izvor energije i gdje temperatura doseže 15 milijuna kelvina vodika je manje nego helija.</p>

        </div>
    </div>
  );
}

export default Sunce;