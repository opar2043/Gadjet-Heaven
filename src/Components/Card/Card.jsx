import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({pCard}) => {
    const {id, title, image, category, price, description, specification, availability, rating} = pCard
  return (
    <div>
          <div className="border-2 shadow-sm rounded-lg p-2">
                <div>
                    <img src={image} alt="" className="w-full h-[200px] object-cover" />
                </div>
                <div className="text-left px-2 py-3 flex flex-col gap-2">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-600 font-semibold ">Price: {price} $</p>
                      <Link to={`/product/${id}`}><button className="btn btn-outline btn-secondary py-1 rounded-2xl">show Details</button></Link>
                 
                </div>
          </div>
    </div>
  )
}

export default Card