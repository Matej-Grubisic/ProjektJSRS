import '../App.css';



function Dijete({slanje, slanje2, slanje3, slanje4, slanje5, slanje6, slanje7, slanje8, slanje9, slanje10, slanje11, slanje12}) {
  return (
    <div className="dijete">
        1. {slanje.ime} {slanje.prezime},  2. {slanje2.ime} {slanje2.prezime} <br />
        3. {slanje3.ime} {slanje3.prezime},  4. {slanje4.ime} {slanje4.prezime} <br />
        5. {slanje5.ime} {slanje5.prezime}, 6. {slanje6.ime} {slanje6.prezime} <br />
        7. {slanje7.ime} {slanje7.prezime}, 8. {slanje8.ime} {slanje8.prezime} <br />
        9. {slanje9.ime} {slanje9.prezime}, 10. {slanje10.ime} {slanje10.prezime} <br />
        11. {slanje11.ime} {slanje11.ime}, 12. {slanje12.ime} {slanje12.prezime} <br />

    </div>
  );
}

export default Dijete;