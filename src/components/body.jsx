import React, { Component } from "react";

class Body extends Component {
  renderHole(hole, onHammered) {
    // if (hole.id % 7 === 0)
    //   return <div key={hole.id + 50} className="board-row"></div>;
    // else
    return (
      <div key={hole.id} className="square" onClick={() => onHammered(hole)}>
        {hole.value}
      </div>
    );
  }

  render() {
    const { hole, onHammered } = this.props;

    // return <div>{hole.map((hole) => this.renderHole(hole, onHammered))}</div>;
    return (
      <div>
        <div className="board-row">
          {this.renderHole(hole[0], onHammered)}
          {this.renderHole(hole[1], onHammered)}
          {this.renderHole(hole[2], onHammered)}
          {this.renderHole(hole[3], onHammered)}
          {this.renderHole(hole[4], onHammered)}
          {this.renderHole(hole[5], onHammered)}
        </div>
        <div className="board-row">
          {this.renderHole(hole[6], onHammered)}
          {this.renderHole(hole[7], onHammered)}
          {this.renderHole(hole[8], onHammered)}
          {this.renderHole(hole[9], onHammered)}
          {this.renderHole(hole[10], onHammered)}
          {this.renderHole(hole[11], onHammered)}
        </div>
        <div className="board-row">
          {this.renderHole(hole[12], onHammered)}
          {this.renderHole(hole[13], onHammered)}
          {this.renderHole(hole[14], onHammered)}
          {this.renderHole(hole[15], onHammered)}
          {this.renderHole(hole[16], onHammered)}
          {this.renderHole(hole[17], onHammered)}
        </div>
        <div className="board-row">
          {this.renderHole(hole[18], onHammered)}
          {this.renderHole(hole[19], onHammered)}
          {this.renderHole(hole[20], onHammered)}
          {this.renderHole(hole[21], onHammered)}
          {this.renderHole(hole[22], onHammered)}
          {this.renderHole(hole[23], onHammered)}
        </div>
      </div>
    );
  }
}

export default Body;
