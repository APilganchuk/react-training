import { Panel } from "./components/Panel/Panel";
import ProductList from "./components/Products/Products";
import products from "./products.json";
import "./App.css";

const color = {
  prime: "green",
  second: "red",
};
const { prime, second } = color;
const App = () => {
  return (
    <div>
      <Panel color={prime} />
      <Panel color={second} />

      <ProductList products={products}>
        <h3 style={{ color: "tomato" }}>PRODUCTS</h3>
      </ProductList>
    </div>
  );
};
export default App;
