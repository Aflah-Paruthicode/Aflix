import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Login"
import Browse from "./Browse"
import SignUp from './SignUp'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Login />
    },
    {
        path : '/SignUp',
        element : <SignUp />
    },
    {
      path : '/browse',
      element : <Browse />
    }
  ]
)

  return (
    <>
      <RouterProvider router={appRouter} />
      </>
  )
}

export default Body