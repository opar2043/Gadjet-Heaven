
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'
export const CountContext = createContext();
export const WishContext = createContext();

function App() {

  const [count,setCount] = useState([]);
  const [wish , setWish] = useState([]) 
  console.log(count);

 
   
  function handleRemovetoCart(product){
     const remove = count.filter(item => item.id !== product.id);
     setCount(remove);   
}
 

  return (


    <div>
      <CountContext.Provider value={{count , setCount ,handleRemovetoCart}}>
        <WishContext.Provider value={{wish , setWish}}>
        <div className=''>
         <Navbar></Navbar>
         <div>
          <Outlet></Outlet>
         </div>
         {/* outlet */}
           
         </div>
        </WishContext.Provider>
      </CountContext.Provider>
      <Footer></Footer>
    </div>
  )
}

export default App
