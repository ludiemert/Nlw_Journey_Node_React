import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/test",
    element: <div>Hellotest....!</div>,
  },
]);



export function App() {
  return <RouterProvider router={router} />


}
