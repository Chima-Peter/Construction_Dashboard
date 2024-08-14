import { NavLink } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";

function MobileNav() {
   const [icon, setIcon] = useState(true)
   const [animateState, setAnimateState] = useState('animate')
   const [scrollNav, setScrollNav] = useState<boolean>(false)


   useEffect(() => {
      const scrollEffect = () => {
         setScrollNav(window.scrollY > 0)
      }
      window.addEventListener('scroll', scrollEffect)

      return () => window.removeEventListener('scroll', scrollEffect)
   })

   const handleNavEntry = () => {
      setIcon(false)
      setAnimateState('animate')

      // Set animation for entry
   }

   // toggling the hamburger menu to show menu

   const handleNavExit = () => {
      setTimeout(() => {setIcon(true)}, 400)
      // delay removal of menu so animation can work first

      setAnimateState('exit')

      // Set animation for exit
   }
   // toggling the hamburger menu to hide menu

   const slideVariants = {
      initial: {
         x: '-10%',
         opacity: 0
      },
      animate: {
         x: 0,
         opacity: 1
      },
      exit: {
         x: '-10%',
         opacity: 0
      }
   }
   // animation to show menu

  return (
      <nav className={`flex bg-[blue] z-50 w-[100%] flex-col gap-4 p-4 px-4  fixed top-0 ${scrollNav ? 'shadow-lg shadow-gray-300' : ''}`}>
         <div className="w-[100%] flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">
               Seamless Construction
            </h1>
            {
               icon && <GiHamburgerMenu className="w-7 h-7 text-white" onClick={handleNavEntry} />
            }
            {
               !icon && <MdCancelPresentation className="w-7 h-7 text-white" onClick={handleNavExit} />
            }
            
         </div>
         {
            !icon && <motion.div  
               className='text-xs font-medium flex box-border flex-col gap-8 px-4 pb-4 h-[100vh]'
               variants={slideVariants}
               initial='initial'
               animate={animateState}
               transition= {{
                     ease: 'linear',
                     duration: 0.3
               }}>
               <ul className="flex gap-6 flex-col items-start appearance-none font-main">
                  <li>
                     <NavLink to={'/'} className="text-xs font-[500] text-white hover:border-b-2 pb-1 border-b-white">
                        Add Project
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={'/view'}  className="text-xs font-[500] text-white hover:border-b-2 pb-1 border-b-white">
                        View Project
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={'_'}  className="text-xs font-[500] text-white hover:border-b-2 pb-1 border-b-white">
                        Edit Project
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={'_'}  className="text-xs font-[500] text-white hover:border-b-2 pb-1 border-b-white">
                        About us
                     </NavLink>
                  </li>
               </ul>
               <ul className="flex gap-6 justify-start appearance-none">
                  <li>
                     <NavLink to={''}>
                        <FaFacebookF className="w-4 h-4 text-white" />
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={''}>
                        <FaTwitter className="w-4 h-4 text-white" />
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={''}>
                        <FaInstagram className="w-4 h-4 text-white" />
                     </NavLink>
                  </li>
               </ul>
         </motion.div>
         }
      </nav>
  )
}

export default MobileNav
