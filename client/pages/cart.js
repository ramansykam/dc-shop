import { useContext } from 'react';
import { Store } from '../context/Store';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item._id} item={item} />)
      )}
    </div>
  );
}
