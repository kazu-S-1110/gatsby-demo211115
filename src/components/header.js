import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/favicon.ico"
import "../styles/header.css"

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={LOGO_IMG} className="logo-image" alt="logo" />
      </Link>
    </header>
  )
}
