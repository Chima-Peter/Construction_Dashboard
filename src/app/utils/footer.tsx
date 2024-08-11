import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
   return (
      <footer className="flex flex-col gap-3 px-4 md:px-10 bg-white border-t border-t-gray-200 lg:mt-5 flex-wrap lg:flex-nowrap font-main w-[100%] pb-8">
         <div className="flex gap-6 md:justify-between border-b  flex-wrap lg:flex-nowrap border-b-gray-300 w-[100%] pb-6">
            <div className="flex flex-col items-start pt-4">
            <h5 className="text-2xl font-semibold px-2">
               Seamless Constructions
            </h5>
            <p  className=" px-2 pt-2 font-[400] text-[12px]">
               Constructing Excellence, One Project at a Time.
            </p>
            </div>
            <ul className="flex justify-between w-[100%] lg:w-fit lg:justify-normal lg:gap-12 items-center appearance-none">
               <li>
                  <Link to={''}  className="text-xs font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     Add Project
                  </Link>
               </li>
               <li>
                  <Link to={''}  className="text-xs font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     View Project
                  </Link>
               </li>
               <li>
                  <Link to={''}  className="text-xs font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     Edit Project
                  </Link>
               </li>
               <li>
                  <Link to={''}  className="text-xs font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     About us
                  </Link>
               </li>
            </ul>
         </div>
         <div className="flex gap-4 justify-center md:justify-between w-[100%] ml-auto pt-4 flex-wrap md:flex-nowrap"> 
            <div></div>
            <p  className=" px-2 pt-2 font-[400] text-[11px]">
               ©2024 React. Created by <span className="text-red-500"> Mobi</span>
            </p>
            <ul className="flex gap-6 items-center appearance-none">
               <li>
                  <Link to={''}>
                     <FaFacebookF className="w-4 h-4" />
                  </Link>
               </li>
               <li>
                  <Link to={''}>
                     <FaTwitter className="w-4 h-4" />
                  </Link>
               </li>
               <li>
                  <Link to={''}>
                     <FaInstagram className="w-4 h-4" />
                  </Link>
               </li>
            </ul>
         </div>
      </footer>
      
   )
}

export default Footer