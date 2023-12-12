import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
        <div className=" pb-2 ...">
    <div className=" text-black ">
       
<div className="  flex px-5 justify-between w-full py-2  ">

<div className="dropdown ">
<div className="bg-blue-900 "></div>
<label tabIndex={0} className="btn btn-ghost flex-col-reverse lg:hidden">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-5 z-[1] p-2   ">
 <NavLink to = "/" className={({ isActive}) =>
isActive ? "text-sky-800 text-md underline  px-5 py-2 rounded-md "  : ""
} >Home</NavLink>


<NavLink to = '/skills' className={({ isActive}) =>   
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Skills</NavLink>

<NavLink to = '/Projects' className={({ isActive}) =>   
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Projects</NavLink>



 <NavLink to = '/education' className={({ isActive}) =>
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
}>Education</NavLink>

 <NavLink to = '/contact' className={({ isActive}) =>
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
}>Contact</NavLink>

 
</ul>
</div>
<img className="hidden h-10 w-40  " src='https://i.ibb.co/kS4Yd3X/aiman.png' alt="" />
</div>
<div className="flex justify-between">
<div>
<img className="h-10 w-40" src='https://i.ibb.co/kS4Yd3X/aiman.png' alt="" />
</div>
<div className=" hidden lg:flex h-10 font-bold  py-2 items-center ">

<ul className="flex gap-5 text-md ">
<NavLink to='/' className={({ isActive}) =>
isActive ? "text-blue-800 text-md underline  px-5 py-2 " : ""
} >Home</NavLink>

<NavLink to = '/skills' className={({ isActive}) =>   
isActive ? "text-blue-800 text-md underline  px-5 py-2 rounded-md "  : ""
} >Skills</NavLink>
<NavLink to = '/Projects' className={({ isActive}) =>   
isActive ? "text-blue-800 text-md underline  px-5 py-2 rounded-md "  : ""
} >Projects</NavLink>
 
<NavLink to = '/education' className={({ isActive}) =>
isActive ? "text-blue-800 text-md underline  px-5 py-2 " : ""
}> Education</NavLink>
<NavLink to = '/Contact' className={({ isActive}) =>
isActive ? "text-blue-800 text-md underline  px-5 py-2 " : ""
}> Contact</NavLink>

</ul>

</div>
<div className="flex justify-center gap-3 items-center">

<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
 <div className="w-10 rounded-full">

   
   
   
 </div>
</label>




</div>
</div>

</div> 
 </div>
    </div>
    );
};

export default Navbar;