import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  state = {
    value: 3,
    time: 0,
  };

  componentDidMount() {
    console.log("component did mount");
    setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.value) {
      console.log("state update");
      
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Value:{this.state.value}</h2>
        <h2>Your time site:{this.state.time}</h2>
      </div>
    );
  }
}
export default App;
