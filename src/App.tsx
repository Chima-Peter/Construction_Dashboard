import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./app/features/errorpage"
import ViewProjects from "./app/features/ViewProject/page"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Seamless/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<ViewProjects />} />
         </Routes> 
      </BrowserRouter>
  )
}



