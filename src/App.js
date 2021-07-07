import Panel from "./components/Panel";
import ProductList from "./components/Products";
import products from "./products.json";

const App = () => {
  return (
    <div>
      <h1>Главный компонент контейнер приложения</h1>
      <Panel />
      <ProductList products={products}>
        <h3 style={{ color: "tomato" }}>PRODUCTS</h3>
      </ProductList>
    </div>
  );
};
export default App;
