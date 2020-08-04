import React, {Component} from "react"
import Team from "../team/Team"
import Scoring from "../../assets/bballshot.wav"
import Shooting from "../../assets/swish.wav"


class Game extends Component {
    constructor(props) {
      super(props)

      this.state = {
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }

      this.shotSound = new Audio(Scoring)
      this.scoreSound = new Audio(Shooting)
    }

    shoot = (team) => {
      const teamStatsKey = `${team}TeamStats`
      let score = this.state[teamStatsKey].score
      this.shotSound.play()


      if (Math.random() > 0.5) {
        score += 1

        setTimeout(() => {
          this.scoreSound.play()
        }, 100)
      }

      this.setState((state) => ({
        [teamStatsKey] : {
        shots: state[teamStatsKey].shots + 1,
        score
        }
      }))
    }

    render() {
      return (
        <div className="Game">
          <h1>Welcome to {this.props.venue}</h1>
          <div className="Stats">
            <Team
              name={this.props.visitingTeam.name}
              logo={this.props.visitingTeam.logoSrc}
              stats={this.state.visitingTeamStats}
              shotHandler={() => this.shoot('visiting')}
            />
            <div className="versus">
              <h1>VS</h1>
            </div>
            <Team
              name={this.props.homeTeam.name}
              logo={this.props.homeTeam.logoSrc}
              stats={this.state.homeTeamStats}
              shotHandler={() => this.shoot('home')}
            />
          </div>
        </div>
      )
    }
  }

  export default Game