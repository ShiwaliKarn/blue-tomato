'use client';

import './Add.css'
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Add = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!data.name || !data.description || !data.price || !data.category || !image) {
      toast.error("Please fill in all required fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post('/api/food/addFood', formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: ""
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <Image src={image ? URL.createObjectURL(image) : '/Images/uploadarea.png'} alt='upload sign' width={210} height={90} />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content here' required></textarea>
        </div>
        <div className='add-category-price'>
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" >
              <option value="">Select Category</option>
              <option value="Starters">Starters</option>
              <option value="Chinese">Chinese</option>
              <option value="Tandoor">Tandoor</option>
              <option value="Biryani">Biryani</option>
              <option value="Dessert">Dessert</option>
              <option value="Indian Main Course">Indian Main Course</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='₹100' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add