'use client';
import './Add.css'
import Image from 'next/image';
const page = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload-flex">
          <p>Upload Image</p>
          <label htmlFor="image">
            <Image src='/Images/uploadarea.png' alt='upload sign' width={210} height={90} />
          </label>
          <input type="file" id='image' hidden required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input type="text" name='name' placeholder='Type here' />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Write Content here' required></textarea>
        </div>
        <div className='add-category-price'>
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" >
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
            <input type="number" name='price' placeholder='₹100' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default page