import { NavLink } from "react-router-dom";
const Categories = ({categories}) => {
    // console.log(categories);
  return (
    <div className="flex flex-col  gap-4">
        <div>
        <NavLink>
        <div className="btn w-[160px] hover:text-white hover:bg-[#9538E2]">All Category</div>
        </NavLink>
        </div>
       
         <div className="grid grid-cols-2 md:grid-cols-1 gap-2 my-2">
         {
            categories.map((category,idx)=><NavLink to={`/category/${category.category}`} className={''} key={idx}>
                <button className="btn font-bold w-[160px] hover:text-white hover:bg-[#9538E2]">{category.category}</button>
            </NavLink>)
          }
         </div>
    </div>
  )
}

export default Categories