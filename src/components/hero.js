import React from "react"

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my app! <br />
        Enjoy lots of posts. <br />
      </h1>
      <div className="hero-author">
        <img
          // src="https://api.unsplash.com/photos/random"
          src="https://source.unsplash.com/random"
          width={400}
          className="hero-author-image"
          alt="avatar"
        />
        <p className="hero-author-text">
          Written by hoge. <br />
          Front Engineer at HOGE.Inc. Love React.
        </p>
      </div>
    </div>
  )
}
