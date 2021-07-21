import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Products/Products.module.css";

const Products = ({
  updateBascet,
  bascet,
  handleChange,
  products,
  children,
  allPrice,
}) => {
  return (
    <div>
      {children}
      <input
        onChange={handleChange}
        type="text"
        placeholder="search coffe"
        style={{ display: "block" }}
      />
      <b style={{ color: "red" }}>All price: {allPrice} $</b>
      <ul className={styles.product_list}>
        {products.map(({ id, name, price, img }) => (
          <ProductCard
            updateBascet={updateBascet}
            bascet={bascet}
            key={id}
            name={name}
            price={price}
            img={img}
          />
        ))}
      </ul>
    </div>
  );
};
Products.defaultProps = {
  children: <h1>defaultProps</h1>,
  allPrice: 10,
};

Products.propTypes = {
  children: PropTypes.array,
  allPrice: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string,
    })
  ),
};

export default Products;
