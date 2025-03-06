
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ErrorPage from './Components/ErrorPage'
import Cart from './Pages/Cart'

function App() {
  const myRoute=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
