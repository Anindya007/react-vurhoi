import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { COUNT: 1 , num : 2};
  }

  render() {
    return (
      <div>
        <h4>Multiples of: <input type="text" value={this.state.num} onChange={(e) => {
     this.setState({ num: e.target.value})}}/></h4>
        <p>
          {this.state.num}*{this.state.COUNT} = {parseInt(this.state.num) * this.state.COUNT}
        </p>
        <button onClick={e => this.setState({ COUNT: this.state.COUNT + 1 })}>
          Next Multiple
        </button>
      </div>
    );
  }
}

App.propTypes = {
  OF: PropTypes.Integer
};
