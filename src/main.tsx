import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { store } from './app/redux/store.ts'
import './index.css'
import { Provider } from 'react-redux'

type Context = '/' | '/Seamless/'
const BaseContext = createContext<Context>('/Seamless/')

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <BaseContext.Provider value={import.meta.env.DEV ? '/' : '/Seamless/'}>
            <App />
         </BaseContext.Provider>
      </Provider>
   </React.StrictMode>
)

export const useBaseContext = () => useContext(BaseContext)