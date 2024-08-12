import MediaQuery from "react-responsive"
import Footer from "../../utils/footer"
import MobileNav from "../../utils/mobile_nav"
import DesktopNav from "../../utils/DesktopNav"
//import { useAppDispatch } from "../../redux/hooks"
//import { addProject } from "./AddProjectSlice"
import AddProjectDetails from "./projectDetails/AddProjectDetails"
import { createContext, SetStateAction, useContext, useState } from "react"
import { ProjectDetails, ResourceProps } from "../../redux/initialState"
import AddResources from "./resources/AddResources"
  

interface ContextProps {
   projectDetails: ProjectDetails,
   setProjectDetails: React.Dispatch<React.SetStateAction<ProjectDetails>>,
   resource: ResourceProps[],
   setResource: React.Dispatch<SetStateAction<ResourceProps[]>>,
   status: string,
   setStatus: React.Dispatch<React.SetStateAction<string>>,
}


const AddContext =  createContext<ContextProps | undefined>(undefined)

function AddProjects() {
   //const dispatch = useAppDispatch()
   // use ref to validate form
   const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
      name: '',
      manager: '',
      progress: 0,
      startDate: '',
      endDate: '',
      keyDetails: [],
      milestones: []
    });

    const [resource, setResource] = useState<ResourceProps[]>([
      {
      name: '',
      units: 0,
      spent: 0,
      quantity: ''
    }
    ])
   const [status, setStatus] = useState<string>('just started')

   return (
      <main className='bg-white min-h-[100vh] flex flex-col gap-6 font-main'>
         <MediaQuery maxWidth={786}>
            <MobileNav />
         </MediaQuery>
         <MediaQuery minWidth={787}>
            <DesktopNav />
         </MediaQuery>
         <form className="flex flex-col gap-6 mt-20">
            <AddContext.Provider value={{projectDetails, setProjectDetails, status, setStatus, resource, setResource}}>
               <AddProjectDetails />
               <AddResources />
            </AddContext.Provider> 
         </form>
         <Footer />
      </main>
   )
}

export default AddProjects


// Custom hook to use the AddContext
export function useAddContext() {
   const context = useContext(AddContext);
   if (!context) {
     throw new Error('useAddContext must be used within an AddContext.Provider')
   }
   return context;
 }
 
