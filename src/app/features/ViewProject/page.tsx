import React, { createContext, SetStateAction, useContext, useState } from "react"
import Budget from "./budget/Budget"
import ProjectDetails from "./project_details/ProjectDetails"
import Resources from "./resources/Resources"
import Footer from "../../utils/footer"
import DesktopNav from "../../utils/DesktopNav"
import MediaQuery from "react-responsive"
import MobileNav from "../../utils/mobile_nav"
import Search from "./Search"

interface SearchProps {
   id: string,
   setId: React.Dispatch<SetStateAction<string>>,
   show: boolean,
   setShow: React.Dispatch<SetStateAction<boolean>>
}

const SearchContext = createContext<SearchProps |undefined>(undefined)

function ViewProjects() {
   const [show, setShow] = useState<boolean>(false)
   const [id, setId] = useState<string>('')
   

   return (
      <main className="bg-white min-h-[100vh] flex flex-col gap-6 font-main">
         <MediaQuery maxWidth={786}>
            <MobileNav />
         </MediaQuery>
         <MediaQuery minWidth={787}>
            <DesktopNav />
         </MediaQuery>
         <SearchContext.Provider value={{show, id, setShow, setId}} >
            <Search />
         {
            show ? <>
               <ProjectDetails />
               <section className="flex w-[100%] gap-4 justify-normal md:justify-between flex-wrap px-2 md:px-4 lg:px-8">
                  <Resources />
                  <Budget />
               </section>
            </> :
               <div className="w-[100%] flex justify-center items-center min-h-[50vh]">
                  <h1 className="text-xl font-semibold text-blue-900">
                     Select a project to view...
                  </h1>
               </div>
         }
         </SearchContext.Provider>
         <Footer />
      </main>
   )
}

export default ViewProjects

export function useSearchContext () {
   const context = useContext(SearchContext)
   
   if (!context) 
      throw new Error ('useSearchContext must be used within SearchContext.Provider')
   return context
}
