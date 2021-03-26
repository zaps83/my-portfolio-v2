import * as React from "react"
import NavBar from './navbar'
import "./styles/layout.css"

export default function Layout({ children }) {

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
