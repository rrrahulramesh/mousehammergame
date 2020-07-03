import React, { Component } from "react";
import Body from "./body";

class MouseHammer extends Component {
  state = {
    hole: [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
      { id: 9, value: null },
      { id: 10, value: null },
      { id: 11, value: null },
      { id: 12, value: null },
      { id: 13, value: null },
      { id: 14, value: null },
      { id: 15, value: null },
      { id: 16, value: null },
      { id: 17, value: null },
      { id: 18, value: null },
      { id: 19, value: null },
      { id: 20, value: null },
      { id: 21, value: null },
      { id: 22, value: null },
      { id: 23, value: null },
    ],
    currentHole: 0,
    isGameStarted: false,
    timer: 3000,
    score: 0,
    isHoleSelected: false,
    toggleStop: null,
    difficultyLevel: [1, 2, 3],
  };

  handleHammered = (hole) => {
    const { score, currentHole, isGameStarted, isHoleSelected } = this.state;
    if (isGameStarted === true) {
      if (hole.id === currentHole && isHoleSelected === false) {
        this.setState({ isHoleSelected: true });
        this.setState({ score: score + 5 });
        console.log("hammered", hole.id);
      } else if (hole.id !== currentHole) this.setState({ score: score - 2 });
    }
  };

  randomHoleGenerator = () => {
    const min = 0;
    const max = 23;
    const { hole, timer } = this.state;

    var { currentHole } = this.state;
    const random = Math.floor(Math.random() * (max - min) + min);
    currentHole = random;
    this.setState({ currentHole });
    this.setState({ isHoleSelected: false });

    const newValue = <i className="fa fa-android"></i>;
    hole[random].value = newValue;

    this.setState({ hole });

    hole[random].value = null;

    setTimeout(() => {
      this.setState({ hole });
    }, timer / 2);
  };

  handleStart = () => {
    const { timer, isGameStarted } = this.state;
    if (isGameStarted === false) {
      var toggle;
      console.log("Game started");
      this.setState({ isGameStarted: true });
      toggle = setInterval(() => {
        this.randomHoleGenerator();
      }, timer);
      this.setState({ toggleStop: toggle });
    }
  };

  handleStop = () => {
    const { toggleStop, isGameStarted, score } = this.state;
    if (isGameStarted === false) alert("You haven't started the game yet!");
    else {
      clearInterval(toggleStop);
      this.setState({ isGameStarted: false });
      alert("Your Score is " + score);
      this.setState({ score: 0 });
    }
  };

  handleDifficultyLevel = (difficultyLevel) => {
    const { isGameStarted } = this.state;
    if (isGameStarted === false) {
      if (difficultyLevel === 3) this.setState({ timer: 1000 });
      else if (difficultyLevel === 2) this.setState({ timer: 2000 });
      else if (difficultyLevel === 1) this.setState({ timer: 3000 });
    }
  };

  render() {
    const { score, difficultyLevel } = this.state;
    return (
      <div className="grid-container">
        <h5>Difficulty level</h5>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            key={difficultyLevel[0]}
            type="button"
            className="btn btn-success"
            onClick={() => this.handleDifficultyLevel(difficultyLevel[0])}
          >
            Easy
          </button>
          <button
            key={difficultyLevel[1]}
            type="button"
            className="btn btn-warning"
            onClick={() => this.handleDifficultyLevel(difficultyLevel[1])}
          >
            Medium
          </button>
          <button
            key={difficultyLevel[2]}
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDifficultyLevel(difficultyLevel[2])}
          >
            Hard
          </button>
        </div>
        <h1>Score: {score}</h1>
        <button
          className="btn btn-primary btn-primary-spacing"
          onClick={this.handleStart}
        >
          Start
        </button>
        <button
          className="btn btn-danger btn-danger-spacing"
          onClick={this.handleStop}
        >
          Stop
        </button>

        <Body hole={this.state.hole} onHammered={this.handleHammered} />
      </div>
    );
  }
}

export default MouseHammer;
