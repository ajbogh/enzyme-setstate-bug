import * as React from 'react';

export default class MyComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // this should be called
    console.log('----componentDidUpdate called');
    this.props.onNameChange(this.state.name);
  }

  changeName(name) {
    // this is always called
    console.log('----changeName called');
    this.setState({ name });
  }

  render() {
    return null;
  }
}