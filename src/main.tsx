import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'

type Context = '/' | '/repo/'
const BaseContext = createContext<Context>('/')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BaseContext.Provider value={import.meta.env.DEV ? '/' : '/repo/'}>
      <React.StrictMode>
         <App />
      </React.StrictMode>,
  </BaseContext.Provider>
)

export const useBaseContext = () => useContext(BaseContext)