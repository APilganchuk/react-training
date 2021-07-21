import { Component } from "react";
import { Panel } from "./components/Panel/Panel";
import Counter from "./components/Counter";
import Products from "./components/Products";
import ColorPicker from "./components/ColorPicker";
import products from "./products.json";
import colorPickerOptions from "./colorPickerOptions.js";
import Dropdown from "./components/Dropdown";
import TodoList from "./components/TodoList";
import "./App.css";

const color = {
  prime: "green",
  second: "red",
};
const { prime, second } = color;

const BASCET = {};
products.forEach((product) => (BASCET[product.name] = 0));

class App extends Component {
  state = {
    todos: [],
    search: "",
    BASCET,
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  updateBascet = (productId, newValue) => {
    this.setState({ BASCET: { ...BASCET, [productId]: newValue } });
  };
  render() {
    const { search, BASCET } = this.state;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    let bascetMessage = "";
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} />
        <Dropdown />

        <Panel color={prime} />
        <Panel color={second} />

        <Products
          bascet={BASCET}
          updateBascet={this.updateBascet}
          handleChange={this.handleChange}
          products={filteredProducts}
        >
          <h3 style={{ color: "tomato" }}>PRODUCTS</h3>
          <p>Bascet:{bascetMessage}</p>
        </Products>
      </div>
    );
  }
}
export default App;
