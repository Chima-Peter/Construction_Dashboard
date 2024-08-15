import React, { useRef, useState } from 'react'
import { selectAllProjects, selectCompleteProjects, selectInProgressProjects, selectPausedProjects, selectNearCompletionProjects, selectNotStartedrojects, selectCancelledProjects, selectPlannedProjects } from './ViewProjectSlice'
import { useAppSelector } from '../../redux/hooks'
import { ProjectProps, projectStatuses } from '../../redux/initialState'
import { useSearchContext } from './page'

export default function Search() {

   const { setShow, setId } = useSearchContext()
   const inputRef = useRef<HTMLInputElement |null>(null)
   const selectRef = useRef<HTMLSelectElement |null>(null)
   const [search, setSearch] = useState(false)
   const [searchResult, setSearchResult] = useState<ProjectProps[]>()

   // get all projects; complete or not
   const allProjects = useAppSelector((state) => selectAllProjects(state))

   // get only complete projects
   const completeProjects = useAppSelector((state) => selectCompleteProjects(state));

   // get only working projects
   const inProgressProjects = useAppSelector((state) => selectInProgressProjects(state));

   const pausedProjects = useAppSelector((state) => selectPausedProjects(state));

   const nearCompleteProjects = useAppSelector((state) => selectNearCompletionProjects(state));

   const notStartedProjects = useAppSelector((state) => selectNotStartedrojects(state));

   const cancelledProjects = useAppSelector((state) => selectCancelledProjects(state));

   const plannedProjects = useAppSelector((state) => selectPlannedProjects(state));

   // set initial state to all projects before selection starts
   const [projects, setProjects] = useState(allProjects)

   // state to hide the project display till user chooses a project

   const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === projectStatuses[0]) setProjects(notStartedProjects);
      else if (event.target.value === projectStatuses[1]) setProjects(plannedProjects);
      else if (event.target.value === projectStatuses[2]) setProjects(inProgressProjects);
      else if (event.target.value === projectStatuses[3]) setProjects(nearCompleteProjects);
      else if (event.target.value === projectStatuses[4]) setProjects(completeProjects);
      else if (event.target.value === projectStatuses[5]) setProjects(pausedProjects);
      else if (event.target.value === projectStatuses[6]) setProjects(cancelledProjects);
      else setProjects(allProjects);
   }

   // handle select box pick
   const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value !== '') {
         setId(event.target.value)
         setShow(true)
         setSearch(false)
         if (inputRef.current) inputRef.current.value = ''
      }
      else setShow(false)
   }

   // handle search by name
   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > 0) {
         // filter out names that start with or include project names then sort them based on starts with first
         const temp = allProjects
            .filter((project: any) => {
               const projectName = project.projectDetails.name.toLowerCase();
               return projectName.startsWith(event.target.value) || projectName.includes(event.target.value);
            })
            .sort((a: any, b: any) => {
               const nameA = a.projectDetails.name.toLowerCase();
               const nameB = b.projectDetails.name.toLowerCase();

               // If both names start with the search term, maintain their order
               if (nameA.startsWith(event.target.value) && nameB.startsWith(event.target.value)) {
                  return 0;
               }
               // If only nameA starts with the search term, it should come first
               if (nameA.startsWith(event.target.value)) {
                  return -1;
               }
               // If only nameB starts with the search term, it should come first
               if (nameB.startsWith(event.target.value)) {
                  return 1;
               }
               // Otherwise, maintain their order (this part is optional)
               return 0;
            });
         setSearchResult(temp)
         setSearch(true)
      }
      else setSearch(false)
   }

   // handle clicking on button
   const handleClick = (name:string, id:string) => {
      setId(id)
      setShow(true)
      setSearch(false)
      if (inputRef.current) inputRef.current.value = name
      if (selectRef.current) selectRef.current.value = ''
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => event.preventDefault()

   return (
      <form className="bg-white w-[100%] pb-4 shadow-lg flex gap-6 lg:gap-0 justify-normal md:justify-between flex-wrap px-4 mt-20" onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-wrap w-[100%] lg:w-fit">
               <select ref={selectRef} onChange={handleOption} name="project" id="project" className="appearance-none p-2 border bg-white text-xs font-main tracking-tight text-gray-500 border-gray-200 outline-none focus:shadow-lg rounded-md w-[100%] md:w-[48%] lg:w-[200px] text-center">
                  <option value="">
                     Select project
                  </option>
                  {
                     projects.map((project:any) => (
                        <option value={project.id} key={project.projectDetails.name}>
                           {project.projectDetails.name}
                        </option>
                     ))
                  }
               </select>

               {/*select for status*/}
               <select onChange={handleFilter} name="status" id="status" className="appearance-none py-2 px-4 border bg-white font-main tracking-tight text-gray-500 text-xs border-gray-200 outline-none capitalize focus:shadow-lg rounded-md w-[100%] md:w-[48%] lg:w-[200px] text-center">
                  <option value="">
                     Search by status
                  </option>
                  {
                     projectStatuses.map((status:any) => (
                        <option value={status} key={status}>
                           {status}
                        </option>
                     ))
                  }
                  <option value="all">
                     All Projects
                  </option>
               </select>
            </div>
            <div className="w-[100%] lg:w-fit relative">
               <input type="text" ref={inputRef} onChange={handleSearch} autoComplete="off" name="search" id="search" placeholder="Search for project by name" autoFocus className="px-4 py-2 border border-gray-300 rounded-md w-[100%] lg:w-[400px] outline-none focus:shadow-md placeholder:text-xs placeholder:uppercase capitalize text-[13px]" />
               {
                  search && <div className="customScroll flex flex-col px-2 rounded-md shadow-md border-b border-b-gray-500 mt-2 w-[100%] lg:w-[400px] bg-black text-white pb-0 absolute z-50 h-[200px] overflow-y-auto">
                     {
                        (searchResult && (searchResult.length > 0)) ? searchResult?.map(search => (
                              <button onClick={() => handleClick(search.projectDetails.name, search.id)} key={search.id} name={search.id} type="button" className="text-xs border-t border-t-gray-500 py-2 outline-none">
                                 {search.projectDetails.name}
                              </button>
                           ))
                         :
                        <p className="text-xs border-t border-t-gray-500 py-2 outline-none italic text-center">
                           There's no project with that name.
                        </p>
                     }
                  </div>
               }
            </div>
         </form>
   )
}
