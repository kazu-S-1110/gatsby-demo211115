import React from "react"
import "../styles/layout.css"
import { Header } from "./header"

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  )
}
