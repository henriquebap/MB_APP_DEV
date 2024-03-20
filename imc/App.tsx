import React from "react";

import IMCCalculator from "./components/Imc";

function App() {
  
  const calcular = new IMCCalculator();

  const altura = 175;

  const peso = 64;

  const bmi = calcular.calcular(altura,peso);
  const categoria = calcular.getCategoria(bmi);
    return (<div>
        <h1>
          Calcualdora IMC
        </h1>
        <p>Seu IMC e de: {bmi} e voce esta na categoria: {categoria}'</p>
      </div>);
}

export default App;


