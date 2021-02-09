import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { COUNT: 1 };
  }

  render() {
    return (
      <div>
        <h4>Multiples of: {this.props.OF}</h4>
        <p>
          {this.props.OF}*{this.state.COUNT}
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
