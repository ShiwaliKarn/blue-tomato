'use client';
import { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get('/api/food/foodList');

    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

const removeFood = async(foodId) =>{
const response = await axios.delete('/api/food/removeFood',{id:foodId})
await fetchList();
if(response.data.success){
  toast.success(response.data.message)
}
else {
  toast.error("Error")
}
}
// const removeFood = async (foodId) => {
//   try {
//     const response = await axios.delete(`/api/food/removeFood?id=${foodId}`);
//     await fetchList();
//     if (response.data.success) {
//       toast.success(response.data.message);
//     } else {
//       toast.error(response.data.message || "Error");
//     }
//   } catch (error) {
//     toast.error("Failed to remove food");
//     console.error('Error:', error);
//   }
// };

  useEffect(() => {
    fetchList();
  }, [])


  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <Image src={`/uploads/${item.image}`} alt="Food image" width={50} height={50} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p style={{cursor:"pointer"}} onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List