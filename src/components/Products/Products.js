import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Products/Products.module.css";

const ProductList = ({ products, children, allPrice }) => {
  return (
    <div>
      {children}
      <b style={{ color: "red" }}>All price: {allPrice} $</b>
      <ul className={styles.product_list}>
        {products.map(({ id, name, price, img }) => (
          <ProductCard key={id} name={name} price={price} img={img} />
        ))}
      </ul>
    </div>
  );
};
ProductList.defaultProps = {
  children: <h1>defaultProps</h1>,
  allPrice: 10,
};

ProductList.propTypes = {
  children: PropTypes.object,
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

export default ProductList;
