import { useRef, useState } from "react"
import Budget from "./budget/Budget"
import ProjectDetails from "./project_details/ProjectDetails"
import Resources from "./resources/Resources"
import { useAppSelector } from "../../app/hooks"
import { selectCompleteProjects, selectWorkingProjects } from "./ViewProjectSlice"


function ViewProjects() {

   // ref to get checkbox
   const checkRefs = useRef<(HTMLInputElement | null)[]>([])

   // get all projects; complete or not
   const allProjects = useAppSelector((state) => state.view)

   // get only complete projects
   const completeProjects = useAppSelector((state) => selectCompleteProjects(state));

   // get only working projects
   const workingProjects = useAppSelector((state) => selectWorkingProjects(state));

   // set initial state to with all projects before change starts
   const [projects, setProjects] = useState(allProjects)

   // state to hide the project display till user chooses a project
   const [show, setShow] = useState(false)

   const handleCheckbox = (index:number, next:number) => {

      // logic to ensure user selects either one checkbox or none.
      if (checkRefs.current[index])
         if (!checkRefs.current[next]?.checked) {
            if (checkRefs.current[index].checked) checkRefs.current[index].checked = true; else checkRefs.current[index].checked = false
         }
      else
         checkRefs.current[index].checked = false

      // check to get correct list of projects from store whether they're complete, in progress and set to correct one

      if (checkRefs.current[0]?.checked && !checkRefs.current[1]?.checked) setProjects(completeProjects)
      else if (!checkRefs.current[0]?.checked && checkRefs.current[1]?.checked) setProjects(workingProjects)
      else setProjects(allProjects)
   }

   const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value !== '') setShow(true);
      else setShow(false)
   }

   return (
      <main className="bg-gray-200 p-4 min-h-[100vh] flex flex-col gap-6 font-main">
         <form className="bg-white w-[100%] p-4 shadow-lg flex gap-4 flex-wrap">
            <select onChange={handleOption} name="project" id="project" className="appearance-none py-2 px-4 border bg-white text-sm font-main tracking-tight text-gray-500 border-gray-200 outline-none focus:shadow-lg shadow-md rounded-md">
               <option value="">
                  Select project
               </option>
               {
                  projects.map(project => (
                     <option value={project.projectDetails.name} key={project.projectDetails.name}>
                        {project.projectDetails.name}
                     </option>
                  ))
               }
            </select>
            <label htmlFor="complete" className="text-[11px] flex items-center gap-1">
               <input type="checkbox" ref={(el) => (checkRefs.current[0] = el)} name="complete" id="complete" onChange= {() => handleCheckbox(0 ,1)} />
               Completed Projects
            </label>
            <label htmlFor="in-progress" className="text-[11px] flex items-center gap-1">
               <input type="checkbox" name="in-progress" id="in-progress"  ref={(el) => (checkRefs.current[1] = el)} onChange= {() => handleCheckbox(1, 0)}/>
               Under construction
            </label>
         </form>
         {
            show ? <>
               <ProjectDetails />
               <section className="flex w-[100%] gap-4 justify-normal md:justify-between flex-wrap">
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
      </main>
   )
}

export default ViewProjects
