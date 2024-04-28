'use client';
import { GoPlus } from "react-icons/go";
import Image from 'next/image'
import styles from '@/app/Styles/foodItem.module.css'
import { useState } from 'react'
import { FiMinus } from "react-icons/fi";
import { LiaCartPlusSolid } from "react-icons/lia";

const FoodItem = ({ id, name, price, descrption, image }) => {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_image_container}>
        <Image className={styles.food_item_image} src={image} alt="" />
        {
          !itemCount ? < LiaCartPlusSolid  className={styles.add} onClick={() => setItemCount(prev => prev + 1)} alt='' />
            : <div className={styles.food_item_counter} >
               <FiMinus className={styles.minusCounter} onClick={() => setItemCount(prev => prev - 1)} />
              <p >{itemCount}</p>
              < GoPlus className={styles.plusCounter} onClick={() => setItemCount(prev => prev + 1)} />
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