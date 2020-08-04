import React from "react"


function Team(props) {     

      
      
      let shotPercentageDiv

      if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
        shotPercentageDiv = (
          <div>
            <strong>Shooting %: {shotPercentage}</strong>
          </div>
        )
      }



        return (
          <div className="Team">
            <h2>{props.name}</h2>

            <div className="logo">
              <img src={props.logo} alt="this.props.name" style={{ width: "200px", height: "200px" }} />

            </div>


            <div>
              <strong>Shots:</strong> {props.stats.shots}
            </div>

            <div>
              <strong>Score:</strong> {props.stats.score}
            </div>

            {shotPercentageDiv}

            <button onClick={props.shotHandler}>Shoot</button>

          </div>

)}

        export default Team