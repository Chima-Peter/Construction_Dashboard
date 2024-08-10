import { NavLink } from "react-router-dom"

function DesktopNav() {
   return (
      <nav className="w-[100%] bg-[blue] p-4 flex justify-between font-main">
         <h1 className="text-2xl font-semibold text-white">
            Seamless Construction
         </h1>
         <ul className="flex gap-4 items-center md:mr-2 lg:mr-10">
            <li>
               <NavLink to={'/add'} className="text-xs text-white font-medium pb-1">
                  Add Project
               </NavLink>
            </li>
            <li>
               <NavLink to={'/'} className="text-xs text-white font-medium pb-1">
                  View Project
               </NavLink>
            </li>
            <li>
               <NavLink to={'/edit'} className="text-xs text-white font-medium pb-1">
                  Edit Project
               </NavLink>
            </li>
            <li>
               <NavLink to={'/about'} className="text-xs text-white font-medium pb-1">
                  About us
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default DesktopNav
