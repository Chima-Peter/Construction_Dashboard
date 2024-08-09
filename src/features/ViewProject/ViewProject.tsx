import { useAppSelector } from "../../app/hooks"
import { selectAllProjectDetails } from "./ViewProjectSlice"

function ViewProjects() {
   const ProjectDetails = useAppSelector(selectAllProjectDetails)
   
   return (
      <div>
         <h1>
            Hello
         </h1>
      </div>
   )
}

export default ViewProjects
