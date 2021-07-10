import PropTypes from "prop-types";

const ProductList = ({ products, children, allPrice }) => {
  return (
    <div>
      {children}
      <b>all price: {allPrice} $</b>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <img width="90" src={product.img} alt="img" />
            <p>{product.price} dollars</p>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.object,
  allPrice: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      img: PropTypes.string,
    })
  ),
};

ProductList.defaultProps = {
  children: <h1>defaultProps</h1>,
  allPrice: 11,
};
export default ProductList;
