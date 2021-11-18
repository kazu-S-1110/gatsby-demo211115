const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
              description {
                description
              }
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost

  edges.forEach(edge => {
    createPage({
      // path: 作成するページのURLのパスを表します。slugをもとに作成しています。
      path: `/post/${edge.node.slug}/`,
      // component: ページを作成するためのもととなるコンポーネントのファイルを指定します。このファイルは後ほど作成します。
      component: path.resolve("./src/templates/post.js"),
      // context: componentに渡すデータを設定します。記事データを渡すため、edge.nodeを指定しています。
      context: { post: edge.node },
    })
  })
}
