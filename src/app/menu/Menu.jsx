'use client';
import styles from '../Styles/menu.module.css'
import { menu_list } from '../Components/MenuItems'
import Image from 'next/image'


const Menu = ({ category, SetCategory }) => {
  return (
    <div className={styles.explore_menu} id={styles.explore_menu}>
      <h1>Explore our menu</h1>
      <div className={styles.explore_menu_list}>
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.explore_menu_list_item}
              onClick={() => {
                SetCategory(prevCategory => prevCategory === item.menu_name ? "All" : item.menu_name);
              }}
            >
              <Image className={category===item.menu_name?styles.active:""} src={item.menu_image} alt={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}



export default Menu;



