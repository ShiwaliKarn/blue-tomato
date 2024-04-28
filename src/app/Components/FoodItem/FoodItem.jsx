'use client';

import Image from 'next/image'
import styles from '@/app/Styles/foodItem.module.css'
import { useState } from 'react'

const FoodItem = ({ id, name, price, descrption, image }) => {
  const [itemCount,setItemCount] = useState(0)
  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_image_container}>
        <Image className={styles.food_item_image} src={image} alt="" />
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