'use client';

import { useContext, useState } from 'react'
import styles from '../Styles/cart.module.css'
import { StoreContext } from '../context/StoreContext'
import Navbar from '../Components/Navbar';
import dynamic from 'next/dynamic';
import Footer from '../Components/Footer';
import Image from 'next/image';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
    const [showLogin, setShowLogin] = useState(false);
    const DynamicLoginPopup = dynamic(() => import('../Components/LoginPopup/LoginPopup'), { ssr: false });
    return (
        <div>
            {showLogin ? <DynamicLoginPopup setShowLogin={setShowLogin} /> : <> </>}
            <Navbar setShowLogin={setShowLogin} />
            <div className={styles.cart}>
                <div className={styles.cart_items}>
                    <div className={styles.cart_items_title}>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0)
                            return (
                                <div>
                                    <div className={`${styles.cart_items_title} ${styles.cart_items_item}`}>
                                        <Image src={item.image} alt={item.title} />
                                        <p> {item.name}</p>
                                        <p>₹{item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>₹{item.price * cartItems[item._id]}</p>
                                        <p className={styles.cross} onClick={() => removeFromCart(item._id)}>x</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                    })}
                </div>

                <div className={styles.cart_bottom}>
                    <div className={styles.cart_total}>
                        <h2>Cart Totals</h2>

                        <div className={styles.cart_total_details}>
                            <p>Subtotal</p>
                            <p>{0}</p>
                        </div>
                        <hr />
                        <div className={styles.cart_total_details}>
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className={styles.cart_total_details}>
                            <b>Total</b>
                            <b>{0}</b>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className={styles.cart_promocode}>

                        <div>
                            <p>If you have a promocode, Enter it here</p>
                            <div className={styles.cart_promocode_input}>
                                <input type="text" placeholder='Promo code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart