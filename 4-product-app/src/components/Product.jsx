// Product component: receives product details through props
const Product = ({ name, price, category, onRemove }) => {
  return (
    <div className="product">
      <h3 className="product__name">{name}</h3>
      <p className="product__category">{category}</p>
      <p className="product__price">₹{price}</p>
      <button className="product__remove" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default Product;
