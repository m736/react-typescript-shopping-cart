import { useCart } from "../context/CartContext";
import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
      <p className="text-lg font-medium mt-2">₹{product.price}</p>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      
      <button
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { ...product,quantity:1 },
          })
        }
      >
        Add To Cart
      </button>
      
    </div>
  );
};
export default ProductCard;
