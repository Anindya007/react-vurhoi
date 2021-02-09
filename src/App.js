import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.COUNT = 1;
  }

  render() {
    return (
      <div>
        <h4>Multiples of: OF</h4>
        <p>OF*COUNT</p>
        <button>Next Multiple</button>
      </div>
    );
  }
}

App.propTypes = {
  OF: PropTypes.Integer
};
