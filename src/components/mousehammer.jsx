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
    timer: 3000,
    score: 0,
    isHoleSelected: false,
    toggleStop: null,
  };

  constructor(props) {
    super(props);
    this.initialState = this.state;
  }

  handleHammered = (hole) => {
    const { score, currentHole, isHoleSelected } = this.state;
    this.setState({ isHoleSelected: true });
    if (hole.id === currentHole) {
      this.setState({ score: score + 5 });
      console.log("hammered", hole.id);
    } else this.setState({ score: score - 2 });
    //else this.setState({ score: score - 2 });
  };

  randomHoleGenerator = () => {
    const min = 0;
    const max = 23;
    const { hole, timer } = this.state;

    var { currentHole } = this.state;
    const random = Math.floor(Math.random() * (max - min) + min);
    currentHole = random;
    this.setState({ currentHole });

    const newValue = <i className="fa fa-android"></i>;
    hole[random].value = newValue;

    this.setState({ hole });
    // console.log(random, currentHole);

    hole[random].value = null;

    setTimeout(() => {
      this.setState({ hole });
    }, timer / 2);
  };

  handleStart = () => {
    const { timer } = this.state;
    var toggle;
    console.log("Game started");
    toggle = setInterval(() => {
      this.randomHoleGenerator();
    }, timer);
    this.setState({ toggleStop: toggle });
  };

  handleStop = () => {
    const { toggleStop } = this.state;
    clearInterval(toggleStop);
    alert("Your Score is " + this.state.score);
  };

  render() {
    const { score } = this.state;
    return (
      <div className="grid-container">
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
