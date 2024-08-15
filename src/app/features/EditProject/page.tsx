import MediaQuery from "react-responsive";
import DesktopNav from "../../utils/DesktopNav";
import MobileNav from "../../utils/mobile_nav";
import { useState, createContext, SetStateAction, useContext } from "react";
import { BudgetProps, ProjectDetails, ResourceProps } from "../../redux/initialState";
import EditBudget from "./budget/EditBudget";
import EditProjectDetails from "./projectDetails/EditProjectDetails";
import EditResources from "./resources/EditResources";
import Search from "./Search";
import Submit from "../../utils/submit/SubmitButton";
import SetUp from "./setup";
import Footer from "../../utils/footer";

interface ContextProps {
   projectDetails: ProjectDetails,
   setProjectDetails: React.Dispatch<React.SetStateAction<ProjectDetails>>,
   resource: ResourceProps[],
   setResource: React.Dispatch<SetStateAction<ResourceProps[]>>,
   budget: BudgetProps,
   setBudget: React.Dispatch<SetStateAction<BudgetProps>>,
   status: string,
   setStatus: React.Dispatch<React.SetStateAction<string>>,
   id: string,
   setId: React.Dispatch<SetStateAction<string>>,
   show: boolean,
   setShow: React.Dispatch<SetStateAction<boolean>>
}


const EditContext =  createContext<ContextProps | undefined>(undefined)

export default function Edit() {
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
   const [status, setStatus] = useState<string>('')
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
         <EditContext.Provider value={{show, id, setShow, setId, projectDetails, setProjectDetails, resource, setResource, budget, setBudget, status, setStatus}} >
            <Search />
            <SetUp />
         {
            show ? <form className="flex flex-col" noValidate>
               <EditProjectDetails />
               <EditResources />
               <EditBudget />
               <Submit />
         </form> :
               <div className="w-[100%] flex justify-center items-center min-h-[50vh]">
                  <h1 className="text-xl font-semibold text-blue-900">
                     Select a project to edit...
                  </h1>
               </div>
         }
         </EditContext.Provider>
         <Footer />
      </main>
   )
}

export function useEditContext () {
   const context = useContext(EditContext)
   
   if (!context) 
      throw new Error ('useSearchEditContext must be used within SearchContext.Provider')
   return context
}