import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import NotFoundImg from "../../static/surfing-926822.jpg"

export default function NotFound() {
  return (
    <Layout>
      <Seo title="404 Not Found" description="ページが見つかりません" />
      <div className="not-found-message">
        <h1>404 Not Found</h1>
        <Link to="/">トップページへ</Link>
      </div>
      <img src={NotFoundImg} className="not-found-image" alt="not found" />
    </Layout>
  )
}
