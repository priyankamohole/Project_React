import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       }
//     ]
//   }
// ]
// )

const router =createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='User' element={<User/>}/> 
        <Route path='User/:userid' element={<User/>}/> 
        <Route path='Github' element={<Github/>}/> 
        <Route path='Github/:uid' element={<Github/>}/> 
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
