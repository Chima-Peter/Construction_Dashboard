import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./app/features/errorpage"
import ViewProjects from "./app/features/ViewProject/page"
import AddProjects from "./app/features/AddProject/page"
import Edit from "./app/features/EditProject/page"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Seamless/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<AddProjects />} />
            <Route path="/view" element={<ViewProjects />} />
            <Route path="/edit" element={<Edit />} />
         </Routes> 
      </BrowserRouter>
  )
}



