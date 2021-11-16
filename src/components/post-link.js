import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

export const PostLink = () => {
  return (
    <div className="post-link">
      <div>
        <img src={RANDOM_IMG} alt="post-cover" className="post-link-image" />
      </div>
      <div className="post-link-text">
        <h2>Gatsbyでブログを作成してみた</h2>
        <p className="post-link-body">
          先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。
        </p>
        <p className="post-link-date">2021.11.17</p>
      </div>
    </div>
  )
}
