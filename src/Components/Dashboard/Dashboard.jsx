import { useContext, useState } from "react"
import { CountContext, WishContext } from "../../App"
import { Link, Outlet , NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Dashboard.css'
import { BiSolidPurchaseTag } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Wish from "../Wish/Wish";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const navigate = useNavigate();

  const {count , setCount} = useContext(CountContext);

  const {wish,setWish} = useContext(WishContext);

  const [priceTk,setPrice] = useState(0);
   
  const [state , setState] = useState(true);

  function sortByprice(){
    const sortedata = [...count].sort((a,b) => b.price - a.price);
    setCount(sortedata);
  }

  function togglebtn(){
    setState(!state);
    console.log(state);
  }

  function addtoMoney(taka) {
    const newPrice = priceTk + taka;
    setPrice(newPrice)
    toast.success('Successfully added to cart!')
  }
   function gotoHome(){
    navigate('/');
   }

 function handlePurchase() {
    setCount([])
    document.getElementById('my_modal_1').showModal();  
  };

  console.log(count);


  return (
    <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadjet Heaven </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      
            
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-4xl flex justify-center Tcolor"><BiSolidPurchaseTag></BiSolidPurchaseTag></h3>
                <h3 className="font-bold text-xl">Payment Successful!</h3>
                <p className="py-4 text-lg font-semibold">Your Total Amount - {priceTk} $</p>
                <div className="modal-action">
                  <form method="dialog">
                    

                    <button className="btn bg text-white" onClick={gotoHome}>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
      
      <div className=" mx-auto bg text-white py-10 rounded-b-lg h-[230px]">
           <h1 className="text-3xl font-bold  mx-auto">DashBoard</h1>
           <p className="py-3 w-8/12 mx-auto">
           Explore the latest gadgets Which You want to buy for making happy Your Self.... 
           </p>
           <div className="flex gap-3 justify-center">
                 <Link to={'/dashboard/cart'}>
                 <button onClick={togglebtn} className="font-semibold py-1 border-white bg-white hover:bg-violet-600 hover:text-white border-2 Tcolor rounded-2xl px-6 ">Cart</button>
                 </Link>
                 <Link onClick={togglebtn} to={'/dashboard/wish'}>
                 <button className="font-semibold py-1 border-2 hover:bg-white hover:text-violet-600 border-white rounded-2xl px-6 text-white">Wish List</button>
                 </Link>
           </div>
           <div className="mx-auto w-full">
<ToastContainer position="top-center"  />

           </div>
       </div>
       <div>
       <div className='w-full flex justify-between  py-4'>
      <h2 className="md:text-xl font-bold text-left">{state ? 'Cart' : 'WishList'}</h2>
<div className="flex  justify-center items-center flex-col md:flex-row gap-2">
    <h2 className="font-bold"> {state ? `total Cost : ${priceTk}` : ''}</h2>
   {
    state ? <div className=" ">
            <NavLink><button onClick={sortByprice} className="font-semibold mb-1 py-1  border-2 border-violet-700 rounded-2xl px-6 ">short by price <i className="fa-solid fa-arrow-down-wide-short mx-1"></i> </button></NavLink>
            <NavLink><button onClick={handlePurchase} className="font-semibold py-1  white rounded-2xl px-6 border-white border-2 bg-violet-600 text-white">Pusrchase</button></NavLink>
    </div> : null
   }
</div>
      </div>
       </div>
       <div>
          {state ? (
            count.map((save, idx) => (
              <Cart key={idx} addtoMoney={addtoMoney} save={save} />
            ))
          ) : 
          wish.map( (saveW , idx)=> <Wish key={idx} saveW={saveW}></Wish>
        )
    }
        </div>
       <Outlet></Outlet>

    </div>
  )
}

export default Dashboard