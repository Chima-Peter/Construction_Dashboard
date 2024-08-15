import MediaQuery from "react-responsive"
import Footer from "../../utils/footer"
import MobileNav from "../../utils/mobile_nav"
import DesktopNav from "../../utils/DesktopNav"
//import { useAppDispatch } from "../../redux/hooks"
//import { addProject } from "./AddProjectSlice"
import AddProjectDetails from "./projectDetails/AddProjectDetails"
import React, { createContext, SetStateAction, useContext, useState } from "react"
import { BudgetProps, ProjectDetails, ResourceProps } from "../../redux/initialState"
import AddResources from "./resources/AddResources"
import AddBudget from "./budget/AddBudget"
import Submit from "../../utils/submit/SubmitButton"
import { useHandleSubmit } from "./HandleSubmit"

  

interface ContextProps {
   projectDetails: ProjectDetails,
   setProjectDetails: React.Dispatch<React.SetStateAction<ProjectDetails>>,
   resource: ResourceProps[],
   setResource: React.Dispatch<SetStateAction<ResourceProps[]>>,
   budget: BudgetProps,
   setBudget: React.Dispatch<SetStateAction<BudgetProps>>,
   status: string,
   setStatus: React.Dispatch<React.SetStateAction<string>>,
}


const AddContext =  createContext<ContextProps | undefined>(undefined)

function AddProjects() {
   const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
      name: '',
      manager: '',
      progress: 0,
      startDate: '',
      endDate: '',
      keyDetails: [''],
      milestones: ['']
    });
    const [resource, setResource] = useState<ResourceProps[]>([
      { name: '', units: '0', spent: '0', quantity: '' }
    ])
   const [budget, setBudget] = useState<BudgetProps>({
         resources: [
            {
               name: '',
               units: '0',
               spent: '0'
            }
         ],
         totalBudget: '0',
         quantity: ''
      })
   const [status, setStatus] = useState<string>('just started')
   const handleSubmit = useHandleSubmit()

   const checkSubmit = () => {
      event?.preventDefault()
      if (handleSubmit(projectDetails, resource, budget, status)) {
         setProjectDetails({
            name: '',
            manager: '',
            progress: 0,
            startDate: '',
            endDate: '',
            keyDetails: [''],
            milestones: ['']
          })
          setResource([
            { name: '', units: '0', spent: '0', quantity: '' }
          ])
          setBudget({
            resources: [
               {
                  name: '',
                  units: '0',
                  spent: '0'
               }
            ],
            totalBudget: '0',
            quantity: ''
         })
         setStatus('just started')
      }
   }

   return (
      <main className='bg-white min-h-[100vh] flex flex-col gap-6 font-main'>
         <MediaQuery maxWidth={786}>
            <MobileNav />
         </MediaQuery>
         <MediaQuery minWidth={787}>
            <DesktopNav />
         </MediaQuery>
         <form className="flex flex-col mt-16" noValidate onSubmit={checkSubmit}>
            <AddContext.Provider value={{projectDetails, setProjectDetails, status, setStatus, resource, setResource, budget, setBudget}}>
               <AddProjectDetails />
               <AddResources />
               <AddBudget />
               <Submit />
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
 
