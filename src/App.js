import { Component } from "react";

class App extends Component {
  state = {
    pokemon: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((pokemon) => this.setState({ pokemon }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.loading && <b>Loading...</b>}
        {this.state.pokemon && <div>pokemon</div>}
      </div>
    );
  }
}
export default App;
