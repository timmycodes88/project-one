import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
])

export default router
