import React from "react"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { PostLink } from "../components/post-link"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PostLink />
      <PostLink />
      <PostLink />
      <PostLink />
    </Layout>
  )
}
