import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SignUp from "./SignUp";
import Register from "./Register";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
      errorElement : <Error />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement : <Error />
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement : <Error />
    },
    {
      path: "/register/:email",
      element: <Register />,
      errorElement : <Error />
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
