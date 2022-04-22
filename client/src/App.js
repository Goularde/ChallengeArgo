import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [nomArgonaute, setNomArgonaute] = useState("");
  const [nomArgonauteList, setNomArgonauteList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setNomArgonauteList(response.data);
    });
  }, []);

  const submitNomArgonaute = (e) => {
    e.preventDefault();
    setNomArgonaute(() => "");
    if (nomArgonaute !== "" && nomArgonaute !== null) {
      Axios.post("http://localhost:3001/api/insert", {
        nomArgonaute: nomArgonaute,
      });
    } else {
      alert("Veuillez entrer un nom");
    }

    setNomArgonauteList([...nomArgonauteList, { nomArgonaute: nomArgonaute }]);
  };

  {
    return (
      <div className="App">
        <header>
          <h1>
            <img
              src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
              alt="Wild Code School logo"
            />
            Les Argonautes
          </h1>
        </header>

        <main>
          <h2>Ajouter un(e) Argonaute</h2>
          <form className="new-member-form">
            <label htmlFor="name">Nom de l'Argonaute</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Charalampos"
              value={nomArgonaute}
              onChange={
                //handleChange
                (e) => {
                  setNomArgonaute(e.target.value);
                }
              }
            />
            <button onClick={submitNomArgonaute}>Envoyer</button>
          </form>

          <h2>Membres de l'équipage</h2>
          <section>
            <div className="member-list">
              <ul>
                {nomArgonauteList.map((val) => {
                  return <li key={val.idArgonaute}>{val.nomArgonaute}</li>;
                })}
              </ul>
            </div>
          </section>
        </main>

        <footer>
          <p>Réalisé par Goularde en Anthestérion de l'an 515 avant JC</p>
        </footer>
      </div>
    );
  }
}

export default App;
