import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [nomArgonaute, setNomArgonaute] = useState("");
  //let nomArgonaute = "";

  const submitNomArgonaute = (e) => {
    Axios.post("http://localhost:3001/api/insert", {
      nomArgonaute: nomArgonaute,
    })
      .then(() => {
        alert("Ajout effectué");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => console.log("end request"));
  };
  // finally s'exécute tout le temps à la fin d'une requete que tu recoive une erreur ou des données
  // function handleChange(event) {
  //   nomArgonaute = event.target.value;
  //   console.log(event.target.value);
  // }

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
        <form class="new-member-form">
          <label for="name">Nom de l'Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
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
        <section class="member-list">
          <div class="member-item">Eleftheria</div>
        </section>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
