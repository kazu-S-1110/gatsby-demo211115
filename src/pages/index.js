import React from "react"
import "../styles/style.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <div className="message">Hello world!</div>
      <Link to="/page2">go to page2</Link>
    </>
  )
}
