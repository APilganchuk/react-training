import { Component } from "react";
import Products from "./components/Products";
import products from "./products.json";
import { AuthForm } from "./components/AuthForm";
import "./App.css";

const BASCET = {};
products.forEach((product) => (BASCET[product.name] = 0));

class App extends Component {
  state = {
    search: "",
    BASCET,
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  updateBascet = (productId, newValue) => {
    this.setState({ BASCET: { ...BASCET, [productId]: newValue } });
  };
  showFormInfo = (formData) => {
    console.log(formData);
  };

  getAllprice(productArray) {
    return productArray
      .map((product) => product.price)
      .reduce((acc, product) => acc + product, 0);
  }

  render() {
    const { search, BASCET } = this.state;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    let bascetMessage = "";
    return (
      <div>
        <AuthForm onSubmit={this.showFormInfo} />
        <hr />
        <Products
          bascet={BASCET}
          updateBascet={this.updateBascet}
          handleChange={this.handleChange}
          products={filteredProducts}
          allPrice={this.getAllprice(products)}
        >
          <p>Bascet:{bascetMessage}</p>
        </Products>
      </div>
    );
  }
}
export default App;
