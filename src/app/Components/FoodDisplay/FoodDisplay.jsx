'use client';
import React, { useContext } from 'react'
import styles from '@/app/Styles/foodDisplay.module.css'
import { StoreContext } from '@/app/context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category}) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className={styles.food_display} id={styles.food_display}>
      <div className={styles.food_display_list}>
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem key={index}
                id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            )
          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay


