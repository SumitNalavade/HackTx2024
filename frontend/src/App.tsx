import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import StudioPage from "./pages/StudioPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Chat from "./pages/Chat";
import Insights from "./pages/Insights";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<LandingPage />),
  },
  {
    path: "/studio",
    element: (<StudioPage />),
  },
  {
    path: "/signin",
    element: (<SignInPage />),
  },
  {
    path: "/signup",
    element: (<SignUpPage />),
  },
  {
    path: "/chat/:id",
    element: (<Chat />)
  },
  {
    path: "/insights",
    element: (<Insights />)
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
