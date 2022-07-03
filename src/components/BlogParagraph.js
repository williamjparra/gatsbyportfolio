import React from 'react'

export default function BlogParagraph(src) {
  return (
    <div>{src.children.map((e) => {
        console.log("elemens", e)
        return e
    })}</div>
  )
}
