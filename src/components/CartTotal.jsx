import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    
    const cartAmount = getCartAmount();
    const subtotal = cartAmount !== undefined && cartAmount !== null ? cartAmount : 0;

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {subtotal.toFixed(2)}</p> {/* দুই দশমিকের জন্য ফর্ম্যাটিং */}
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee.toFixed(2)}</p> {/* দুই দশমিকের জন্য ফর্ম্যাটিং */}
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency} {(subtotal + delivery_fee).toFixed(2)}</b> {/* সঠিক টোটাল নিশ্চিত */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
