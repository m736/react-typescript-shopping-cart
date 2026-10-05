import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      {cart.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p>₹{item.price}</p>
          <div className="flex items-center gap-3 mt-3">
            <button
              className="border px-3 py-1 rounded"
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              -
            </button>

            <span className="font-medium"> {item.quantity} </span>

            <button
              className="border px-3 py-1 rounded"
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              +
            </button>
          </div>
          <button
            className="mt-3 border px-3 py-1 rounded"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
          {cart.length > 0 && (
            <h2 className="text-2xl font-bold mt-6">Total: ₹{total}</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
