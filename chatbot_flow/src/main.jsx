import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {NodeTypes} from './Components/Index.jsx'
import store  from './Store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([

  {
    path : '/',
    element: <App/>,
    children :
    [{
        path : '',
        element : <NodeTypes/>
    },
  ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
     <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
