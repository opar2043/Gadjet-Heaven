import { NavLink, useNavigate } from "react-router-dom"
import './Navbar.css'
import { FaShoppingCart , FaHeart} from "react-icons/fa";
import { useContext } from "react";
import { CountContext, WishContext } from "../../App";

const Navbar = () => {
  const {count , setCount} = useContext(CountContext);
  const {wish, setWish} = useContext(WishContext);
        const nav = <>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/state'}>Statistics</NavLink>
                <NavLink to={'/dashboard'} >Dashboard</NavLink>
                <NavLink to={'/contuct'} >Contuct</NavLink>
           </>
           const navigate = useNavigate();
           function homeside(){
            navigate("/dashboard");
           }

  return (
    <div>
        <div className="navbar  bg-[#9538E2] rounded-t-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Gadjet Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-4">
    <ul className="menu menu-horizontal px-1 gap-4 text-white items-center">
      {nav}
    </ul>
  </div>
  <div className="navbar-end md:gap-3 md:text-2xl" onClick={homeside}>
    <div className="flex p-1 text-white">
    <FaShoppingCart />
     <p className="text-sm"> 
        {count.length}
     </p>
    </div>
    <div className="flex p-1 text-white" onClick={homeside}>
    <FaHeart></FaHeart>
     <p className="text-sm "> 
      {wish.length}
     </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar