import { Suspense } from "react"
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom"

import mainMenu, { Menu } from "./components/menu"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            {
              mainMenu.map( (mn: Menu):JSX.Element => (
                <li key={mn.path}>
                  <NavLink to={mn.path}>{mn.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {
                mainMenu.map( (mn: Menu):JSX.Element => (
                  <Route key={mn.path} path={mn.path} element={mn.element}></Route>
                ))
              }
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  )
}