import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import Card from "../Card/Card";



const ProductCard = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [isOutOfStock, setIsOutOfStock] = useState(false);

    // console.log(id);
    // console.log(data);


    const [product , setproduct] = useState([])
    useEffect(()=>{
        if (id === 'smart watch') {
            setIsOutOfStock(true);
        } else {
            setIsOutOfStock(false);
        }
        if(id){
            const newProduct = [...data].filter(p=> p.category === id);
            setproduct(newProduct);
            // console.log(newProduct);
        }else{
            setproduct(data)
        }
    },[data,id])
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {isOutOfStock && <h2 className="text-xl md:text-4xl font-bold  flex justify-center items-center">Out of Stock</h2>}
        {
            product.map(pCard=> <Card pCard={pCard}></Card>)
        }
    </div>

  )
}

export default ProductCard