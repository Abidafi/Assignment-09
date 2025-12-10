import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import logo from "/public/cat-coffee-logo.png";
import MyLink from "./MyLinks";


const Navbar = () => {
  
  return (
    <div className="bg-slate-100 py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={'/'}>Home</MyLink>           
          </li>
          <li>
            <MyLink to={'/services'}>Services</MyLink>
          </li>
          <li>
            <MyLink to={'/profile'}>My Profile</MyLink>
          </li>
        </ul>
 
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
        </button>        
      </MyContainer>
    </div>
  );
};

export default Navbar;
