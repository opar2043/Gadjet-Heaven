import { Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"
import Categories from "../Categories/Categories";
import ProductCard from "../ProductCard/ProductCard";
import {Helmet} from "react-helmet";
const Home = () => {

     const categories = useLoaderData();

  return (
     <div className="my-10">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadjet Heaven </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        {/* header area */}
        <div className="h-[500px] mx-auto bg text-white py-10 rounded-b-lg -mt-10">
      <h1 className="text-4xl font-bold w-9/12 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 w-8/12 mx-auto">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className=" py-2 px-4 font-bold bg-white rounded-2xl text-[#9538E2]">Shop Now</button>
    </div>
        <div>

        </div>
        <Banner></Banner>

        <h2 className="text-2xl md:text-4xl font-bold py-8">Explore Cutting-EDGE Gadgets</h2>

        <div className="flex flex-col md:flex-row justify-center py-4">
               <div className="md:w-1/4 ">
               <div className=" ">
                 <Categories categories={categories}></Categories>
               
               </div>
   
               </div>
               <div className="md:w-3/4 ">
                  
                 <Outlet></Outlet>
                 
               </div>
            </div>

     </div>
      
  )
}

export default Home