import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/ui/errorpage"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/repo/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}



