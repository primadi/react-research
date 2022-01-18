import { lazy } from "react"
import Home from "../pages/home"

// Lazy Import
const Page01 = lazy(() => import("../pages/page01"))

export interface Menu {
  title: String
  path: string
  element: JSX.Element
}

const mainMenu : Menu[] = [
  { title : "Home", path: "/", element: <Home /> },
  { title : "Page 01", path: "/page01", element: <Page01 /> }
]

export default mainMenu