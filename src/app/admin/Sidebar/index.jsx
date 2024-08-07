'use client';
import './Sidebar.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import Link from 'next/link'
import { useState } from 'react';

const Sidebar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <Link onClick={() => setMenu("Add Items")} href='/admin/add' className={menu === "Add Items" ? "active sidebar-option" : "sidebar-option"} >
        <IoAddCircleOutline />
          <p>Add Items</p>
        </Link>
        <Link onClick={() => setMenu("List Items")} href='/admin/list' className={menu === "List Items" ? "active sidebar-option" : "sidebar-option"}>
        <GoChecklist />
          <p>List Items</p>
        </Link>
        <Link onClick={() => setMenu("Orders")} href='/admin/orders' className={menu === "Orders" ? "active sidebar-option" : "sidebar-option"}>
        <BsBoxSeam />
          <p>Orders</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

