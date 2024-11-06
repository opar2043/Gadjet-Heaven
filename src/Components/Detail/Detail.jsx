import { useLoaderData, useParams } from "react-router-dom"
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { CountContext, WishContext } from "../../App";



const Detail = () => {

    // context api 
    const {count , setCount} = useContext(CountContext)
    const {wish , setWish} = useContext(WishContext)
    const [disable , setDisable] = useState(false);
    function makeDisable(){
      setDisable(!disable);
    }

    //  use params section

    const {productId} = useParams();
    const data = useLoaderData();
    console.log(productId);
    console.log(data);


    // function by count and select
    
    function handleAddtoCart(product){
          const newCount = [...count,product];
          setCount(newCount)
          toast('Added To Cart!');
    }
   

    function handleAddtoWish(product){
      const sameItem = wish.find(item => item.id === product.id);

      if(sameItem){
          toast('Already Added This item in Wish List!');
      }else{
        const newWish = [...wish,product];
        setWish(newWish);
        toast('Added To Wish!');
        makeDisable() 
      }

    }
   
  
    // dynamic find actual product

    const item = data.find( d=> d.id === parseInt(productId));
    console.log(item);

    const { title, image, category, price, description, specification, availability, rating } = item;

    console.log(title);
     
  return (
    <div>    

        {/* header area=========== */}


        <div className=" mx-auto bg text-white py-10 rounded-b-lg h-[250px]">
           <h1 className="text-3xl font-bold  mx-auto">Product Detail</h1>
           <p className="py-3 w-8/12 mx-auto">
           Explore the latest gadgets Which You want to buy for making happy Your Self.... 
           </p>
       </div>

            {/* dynamic details area============= */}


         <div className="product-detail my-4 md:my-0 md:w-8/12 mx-auto rounded-2xl md:-mt-28 mb-5 md:mb-20 shadow-lg">
      <div className="hero bg-base-200 rounded-2xl ">
        <div className="hero-content w-full flex-col lg:flex-row md:justify-between gap-7">
          <img src={image} alt={`${title} product image`} className=" rounded-lg shadow-2xl border-2" />
          <div className="w-full">
            <div className="text-left flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="py-2 text-lg font-bold">Price: {price} $</p>
              <div>
                <button
                  className={`font-semibold py-1 ${availability ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500"} border-2 rounded-2xl px-4`}
                >
                  {availability ? "In Stock" : "Out of Stock"}
                </button>
              </div>
              <p className="text-sm font-semibold text-gray-600">{description}</p>
              <p className="font-bold">Specification:</p>
              <ul className="px-2">
                {specification.map((spec, index) => (
                  <li key={index} className="list-disc font-semibold text-gray-500 text-left">{spec}</li>
                ))}
              </ul>
              <h2 className="font-bold flex items-center gap-3">Rating: <FaStar /></h2>
              <div className="text-yellow-500 flex gap-1 items-center">
                {Array(4).fill(<FaStar />)}
                <div className="p-1 rounded-xl bg-slate-300 text-gray-700 font-semibold text-xs">
                  {rating}
                </div>
              </div>
            </div>
            <ToastContainer position="top-center" />
            <div className="flex justify-start gap-4 py-3 items-center">
              <button
                className="px-4 py-1 bg-[#9538E2] text-white font-semibold rounded-2xl flex gap-2 items-center"
                onClick={()=>handleAddtoCart(item)}
              >
                Add to cart <FaShoppingCart />
              </button>
              <button 
       onClick={() => handleAddtoWish(item)} 
       className={` text-pink-600 ${disable ? 'bg-gray-500 rounded-full p-1 cursor-not-allowed className-disable' : ''}`}
       disabled={disable}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Detail