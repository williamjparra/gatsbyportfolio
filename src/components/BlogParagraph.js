import React from 'react'

export default function BlogParagraph(src) {
    console.log(src)
  return (
    <div>{src.children.map((e) => {
        console.log("elemens", e)
        return e
    })}</div>
  )
}
