import { useContext } from 'react';
import { Store } from '../context/Store';

export default function ProductDetails({ product }) {
  const { dispatch } = useContext(Store);

  const addToCartHandler = () => {
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
      <p>{product.description}</p>
    </div>
  );
}
