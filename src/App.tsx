import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./features/errorpage"
import ViewProjects from "./features/ViewProject/ViewProject"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/repo/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<ViewProjects />} />
         </Routes> 
      </BrowserRouter>
  )
}



