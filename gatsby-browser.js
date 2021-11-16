// ここでcssファイルをimportして使うとグローバルに適用される
import "./src/styles/style.css"

// このファイルに記述できる内容はスタイリング以外にもあり、**「ブラウザで表示処理が行われる際の処理」**を書くことができます。
//簡単な一例としては、下記のコードでブラウザの処理が始まるときの処理を定義できます。
export const onClientEntry = () => {
  console.log("we've started!")
}
