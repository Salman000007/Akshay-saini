import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart } from "../utils/cardSlice";
import CartItem from "./CartItem";



const Cart = () => {
    const dispatch = useDispatch()
    const foodItem = useSelector(store => store.cart.items);
    console.log(foodItem)
    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <>
            <button className="bg-green-100 rounded-md p-1 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
            {foodItem.map(item => <CartItem key={item.id}  {...item} />)}
        </>
    )
}

export default Cart;