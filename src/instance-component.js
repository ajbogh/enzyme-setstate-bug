import * as React from 'react';

export default class InstanceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ""
    };
  }

  componentDidMount() {
    this.classFunction();
    this.instanceFunction();
  }

  classFunction() {
    this.setState(() => ({ key: "value" }));
  }

  render() {
    const { key } = this.state;
    return null;
  }
}