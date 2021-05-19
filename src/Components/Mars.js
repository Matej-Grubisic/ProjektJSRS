import {Component} from "react";
import {Link} from "react-router-dom";
import '../App.css';
import Mars1 from "../mars.jpg";



export class Mars extends Component{ 
  state={
    ime: "",
    prezime: "",
    tekst: "",

  }
  onSubmit=e=>{e.preventDefault();window.alert("Poruka putuje na mars!!!");console.log(this.state.ime,this.state.prezime,this.state.tekst);document.getElementsByTagName("p")[5].innerText=this.state.prezime}
  render(){ 
    return (
    <div className="mars2">
        <p className="hmars">Mars</p>
        <p className="link1"><Link to="/" >Natrag na solarni sistem?</Link></p>
        <div className="div1">
        <a href="https://hr.wikipedia.org/wiki/Mars"><img src={Mars1} className="slika1" ></img></a>
        
          <p>Mars, četvrti planet po udaljenosti od Sunca, vidljiv sa Zemlje prostim okom i zato poznat od davnine. Promjer mu je 6792 km, masa 0,107 Zemljine mase, srednja gustoća 3933 kg/m³, a površinsko gravitacijsko ubrzanje 0,377 gravitacijskoga ubrzanja na Zemlji. Ima dva pratioca nepravilna oblika, Deimos i Phobos. Sunčev mu dan traje gotovo kao i Zemljin, 24 h i 40 min. Oko Sunca obiđe za 687 zemaljskih dana, od Sunca je prosječno udaljen 228 mil. km, a zbog nagiba osi vrtnje prema ravnini staze od 25°12′ i izduljenosti staze, pokazuje godišnja doba. Pogled sa Zemlje otkriva na Marsu bijele polarne kape, crvenkastonarančastu površinu s tamnijim i svjetlijim dijelovima te vrlo rijetku atmosferu, koja se sastoji od 95% ugljikova dioksida, 2,7% dušika, 1,6% argona te primjesa. Površinski tlak iznosi oko 700 Pa. U atmosferi se pojavljuju oblaci, a podižu se i pješčane oluje. Temperatura može biti od –140 °C do nešto više od 0 °C, ovisno o dobu dana i godine te o položaju Marsa na stazi. Pojave na površini nazivane su prema kontrastu morima, zaljevima, planinama i sl. (→ albedo), a stvaran reljef ustanovljen je s pomoću međuplanetarnih letjelica.<br></br><br></br>
          
          </p>
          <h3 className="h3mars">Kemijska svojstva</h3>
          <p>Polarne se kape sastoje od smrznute vode i ugljikova dioksida. Zimi se ugljikov dioksid djelomice smrzava pa atmosferski tlak pada za 1/3. Sjeverna i južna polutka geološki se razlikuju. Tlo sjeverne polutke geološki je mlađe, reljef mu je nekoliko kilometara niži od reljefa južne polutke; na južnoj polutki prevladavaju udarni krateri od pada meteoroida, a na sjevernoj ugasli vulkani. Na Marsu se nalazi najviši ugasli vulkan u cijelom Sunčevu sustavu, Olympus Mons, visok više od 27 km i promjera većega od 500 km. Marsovo tlo sastoji se od kremena i limonita i slično je Zemljinu tlu, osim velike prisutnosti željeza na njegovoj površini (oko 13,5%) u obliku oksida, što tlu daje crvenkastonarančastu boju. Mars ima ionosferu te vrlo slabo magnetsko polje. Tokovi nekadašnjih rijeka vode od južne na sjevernu polutku. Snimkama na površini ustanovljeno je postojanje sedimenata nastalih taloženjem u vodi. Zbog malene mase Mars je izgubio velik dio nekadašnje atmosfere i većinu vode u slobodnom stanju, osim malih smrznutih količina na polovima. Moguće je postojanje vode u smrznutom stanju ispod površine Marsa. Traga se i za mogućim ostatcima nekadašnjih oblika života, za sada bez pouzdanih podataka.
          </p>
          <h3 className="h3mars">Posalji poruku na mars</h3>
          <form>
            <input placeholder="ime" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}></input><br />
            <textarea placeholder="prezime" value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})} className="prezime"></textarea><br />

            <textarea placeholder="tekst" value={this.state.tekst} onChange={e=>this.setState({tekst: e.target.value})} className="tekst"></textarea><br />
            <button onClick={e=>this.onSubmit(e)}>Posalji</button>
            <p>Ulogiran si kao {this.state.ime}</p>
            <p> </p>
          </form> 
        </div>
    </div>
  );
}
}
export default Mars;