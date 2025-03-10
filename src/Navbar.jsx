import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="h-20 w-[100%] bg-slate-700 flex flex-row sticky top-0 z-100">
  <div className="flex flex-row justify-between items-center h-full w-full">
    <ul className="flex flex-row justify-center items-center h-full w-full">
      <li className="flex flex-row justify-between gap-10">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-white ${isActive ? 'text-yellow-600' : 'hover:text-yellow-400'} px-4 py-2 transition-all text-3xl duration-200`
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/new-post" 
          className={({ isActive }) => 
            `text-white ${isActive ? 'text-yellow-600' : 'hover:text-yellow-400'} px-4 py-2 text-3xl transition-all duration-200`
          }
        >
          New Post
        </NavLink>
      </li>
    </ul>
  </div>
</div>


  )
}

export default Navbar
