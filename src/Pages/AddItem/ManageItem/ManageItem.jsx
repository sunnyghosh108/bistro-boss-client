import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';

const ManageItem = () => {
    const [menu,,refetch]=useMenu();
    const [axiosSecure]=useAxiosSecure();
    const handleDelete =item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res=>{
                console.log('deleted response',res.data);
                if(res.data.deletedCount >0){
                    refetch();
                  if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
                }
              
            })
          })
    }


    return (
        <div className='w-full'>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
      {
        menu.map((item,index) =><tr
        key={item._id}
        >
            <td>
              {index +1}
            </td>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{item.name}</div>
                 
                </div>
              </div>
            </td>
            <td>
             {item.category}
             
            </td>
            <td className='text-right'>${item.price}</td>
            <td>
              <button class="btn btn-ghost btn-xs">Update</button>
            </td>
            <td>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr>)
      }
    </tbody> 
   </table>
   </div>
 </div>
    );
};

export default ManageItem;