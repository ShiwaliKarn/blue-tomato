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
                        <input type="text" placeholder='First name' required/>
                        <input type="text" placeholder='Last name' />
                    </div>

                    <div className={styles.multi_fields}>
                        <input type="email" placeholder='Email address' required/>
                        <input type="tel" placeholder='Phone' required />
                    </div>

                    <input type="text" placeholder='Address' required />

                    <div className={styles.multi_fields}>
                        <input type="text" placeholder='City' required/>
                        <input type="text" placeholder='State' required />
                    </div>

                    <div className={styles.multi_fields}>
                        <input type="tel" placeholder='Zip Code' required />
                        <input type="text" placeholder='Country' required/>
                    </div>

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
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
                        </div>
                        <hr />
                        <div className={styles1.cart_total_details}>
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
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