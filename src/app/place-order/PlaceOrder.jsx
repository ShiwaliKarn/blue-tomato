'use client';
import styles1 from '../Styles/cart.module.css'
import { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import styles from '../Styles/placeOrder.module.css'
import dynamic from 'next/dynamic';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    const [showLogin, setShowLogin] = useState(false);
    const DynamicLoginPopup = dynamic(() => import('../Components/LoginPopup/LoginPopup'), { ssr: false });

    return (
        <div>
            {showLogin ? <DynamicLoginPopup setShowLogin={setShowLogin} /> : <> </>}
            <Navbar setShowLogin={setShowLogin} />

            <form className={styles.place_order}>
                <div className={styles.place_order_left}>
                    <p className={styles.title}>Delivery Information</p>

                    <div className={styles.multi_fields}>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>

                    <input type="email" placeholder='Email address' />
                    <input type="text" placeholder='Street' />

                    <div className={styles.multi_fields}>
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>

                    <div className={styles.multi_fields}>
                        <input type="tel" placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="tel" placeholder='Phone' />
                </div>

                <div className={styles.place_order_right}>
                    <div className={styles1.cart_total}>
                        <h2>Cart Totals</h2>

                        <div className={styles1.cart_total_details}>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className={styles1.cart_total_details}>
                            <p>Delivery Fee</p>
                            <p>₹{2}</p>
                        </div>
                        <hr />
                        <div className={styles1.cart_total_details}>
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() + 2}</b>
                        </div>
                        <button >PROCEED TO PAYMENT</button>
                    </div>

                </div>
            </form>
            <Footer />
        </div>
    )
}

export default PlaceOrder