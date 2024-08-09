import Budget from "./budget/Budget"
import ProjectDetails from "./project_details/ProjectDetails"
import Resources from "./resources/Resources"


function ViewProjects() {
   

   return (
      <main className="bg-gray-200 p-4 min-h-[100vh] flex flex-col gap-6 font-main">
         <ProjectDetails />
         <section className="flex w-[100%] gap-4 justify-normal md:justify-between flex-wrap">
            <Resources />
            <Budget />
         </section>
      </main>
   )
}

export default ViewProjects
