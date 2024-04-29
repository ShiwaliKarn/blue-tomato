'use client';
import { GoPlus } from "react-icons/go";
import Image from 'next/image'
import styles from '@/app/Styles/foodItem.module.css'
import { useContext} from 'react'
import { FiMinus } from "react-icons/fi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { StoreContext } from "@/app/context/StoreContext";
import { GoHeartFill } from "react-icons/go";


const FoodItem = ({ id, name, price, descrption, image }) => {

  const { cartItems, addToCart, removeFromCart, likedItems, toggleLike } = useContext(StoreContext);

  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_image_container}>
        <Image className={styles.food_item_image} src={image} alt="" />

        <GoHeartFill
          className={`${styles.heart_icon} ${likedItems.includes(id) ? styles.liked : ''}`}
          onClick={() => toggleLike(id)}
        />

        {
          !cartItems[id] ? < LiaCartPlusSolid className={styles.add} onClick={() => addToCart(id)} alt='' />
            : <div className={styles.food_item_counter} >
              <FiMinus className={styles.minusCounter} onClick={() => removeFromCart(id)} />
              <p >{cartItems[id]}</p>
              < GoPlus className={styles.plusCounter} onClick={() => addToCart(id)} />
            </div>

        }
      </div>
      <div className={styles.food_item_info}>
        <div className={styles.food_item_name}>
          <p>{name}</p>
        </div>
        <p className={styles.food_item_desc}>{descrption}</p>
        <p className={styles.food_item_price}>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem