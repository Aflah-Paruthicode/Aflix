import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SignUp from "./SignUp";
import Register from "./Register";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/register/:email",
      element: <Register />,
    },
  ]);



  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
