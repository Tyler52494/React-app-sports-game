import React from 'react';
import './App.css';
import Game from "./components/game/Game"

function App(props) {
  const Predators = {
    name: "Hermitage Predators",
    logoSrc: "https://img.alison-chang.com/20190412135120_23.jpg"
  }

  const Falcons = {
    name: "Cookeville Falcons",
    logoSrc: "https://peregrinefund.org/sites/default/files/styles/raptor_banner_600x430/public/2019-11/raptor-er-lanner-falcon-flying-overhead-jim-shane.jpg?itok=JWoQT4XZ"
  }

  const Labradors = {
    name: "Nashville Labradors",
    logoSrc: "https://www.telegraph.co.uk/content/dam/science/2017/09/10/TELEMMGLPICT000107300056_trans_NvBQzQNjv4BqyuLFFzXshuGqnr8zPdDWXiTUh73-1IAIBaONvUINpkg.jpeg?imwidth=450"
  }

  const JackRabbits = {
    name: "Hendersonville JackRabbits",
    logoSrc: "https://vignette.wikia.nocookie.net/wildkratts/images/1/18/Antelope_Jackrabbit_RL.PNG/revision/latest?cb=20190421170017"
  }
  return (

    <div className="App">
      <Game
        venue="Bridgestone Arena"
        homeTeam={Predators}
        visitingTeam={JackRabbits}
      />
      <Game
        venue="Michelin Gym"
        homeTeam={Falcons}
        visitingTeam={Labradors}
      />
    </div>
  )
}

export default App;
