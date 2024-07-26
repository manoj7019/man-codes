import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Portfolio1 from './Pages/Portfolio1';
import Web from './Pages/Web';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index element={<Portfolio1/>}/>
    <Route path='/web' element={<Web/>}/>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
