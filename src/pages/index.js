import React from "react"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div>Hello world!</div>
    </Layout>
  )
}
