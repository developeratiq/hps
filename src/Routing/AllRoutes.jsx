import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Public from '../Layout/Public';
import Body from '../Layout/Body/Body';

function AllRoutes() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Public />,
          
          children: [
            {
              path: "",
              element: <Body />,
            //   loader: teamLoader,
            },
          ],
        },
      ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AllRoutes