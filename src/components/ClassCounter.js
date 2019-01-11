import React, { Component } from 'react';

class ClassCounter extends Component {
  state = { count: 0 }

  componentDidUpdate() {
    const { count } = this.state

    document.title = `Class: You clicked ${count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button type="button" onClick={() => this.setState((state) => ({ count: state.count + 1}))}>
          Click me
        </button>
      </div>
    );
  }
};

export default ClassCounter;
