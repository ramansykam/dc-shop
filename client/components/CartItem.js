import { useContext } from 'react';
import { Store } from '../context/Store';

export default function CartItem({ item }) {
  const { dispatch } = useContext(Store);

  const removeFromCartHandler = () => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item._id });
  };

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={removeFromCartHandler}>Remove</button>
      </div>
    </div>
  );
}
