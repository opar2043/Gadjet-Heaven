import React, { useContext, useState } from 'react'
import { TiDeleteOutline  } from 'react-icons/ti';
import { CountContext } from '../../App';

const Cart = ({save , addtoMoney}) => {

  const {handleRemovetoCart} = useContext(CountContext);

  
  console.log(save);
  const { title, image, category, price, description, specification, availability, rating } = save || {}
    


  return (
 
  <div>
             <div className='w-11/12 items-center mx-auto rounded-2xl py-4 px-3 flex justify-between shadow-lg my-3 border'>
     <div className='flex gap-3 flex-col md:flex-row'>
        <div>
           <img src={image} className='md:w-30  rounded-lg' />
        </div>
        <div className="flex flex-col text-left  p-2 gap-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="font-bold flex gap-1 ">Descriptiom: <p className="font-semibold w-full text-sm">{description}</p></p>
            <p className="font-bold flex items-center gap-1">price: <h3 className="font-semibold">{price} $</h3></p>
            <div>
            <button className="px-4 py-1 bg-green-400 text-white font-semibold rounded-2xl flex gap-2 items-center" onClick={()=>addtoMoney(price)}>Add to Cart</button>
            </div>
          </div>
     </div>
     <div className='text-2xl font-extrabold text-red-500'>
        <button onClick={()=>handleRemovetoCart(save)}><TiDeleteOutline></TiDeleteOutline></button>
     </div>
         
             </div>
  </div>

  )
}

export default Cart


{/* <div className="flex justify-between px-5 py-5">

</div> */}