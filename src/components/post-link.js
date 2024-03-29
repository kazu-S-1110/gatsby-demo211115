import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"

// const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

export const PostLink = ({ post }) => {
  const { title, updatedAt, image } = post
  const description = post.description.description
  const pageLink = `/post/${post.slug}/`

  return (
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div>
          <img
            src={image.file.url}
            alt="post-cover"
            className="post-link-image"
          />
        </div>
        <div className="post-link-text">
          <h2>{title}</h2>
          <p className="post-link-body">{description}</p>
          <p className="post-link-date">{updatedAt}</p>
        </div>
      </div>
    </Link>
  )
}
