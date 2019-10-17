//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [downValue, setDownValue] = useState(33);

  //home and away teams made dynamic
  const homeTeam = 'Salt'; 
  const awayTeam = 'Slugs';

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down={downValue}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={()=>setHomeScore(homeScore+6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>setHomeScore(homeScore+1)}>Home Extra Point</button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHomeScore(homeScore+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> setAwayScore(awayScore+6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=> setAwayScore(awayScore+1)}>Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick={()=>setAwayScore(awayScore+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
