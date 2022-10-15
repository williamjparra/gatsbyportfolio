import React from 'react'

export default function BlogParagraph(src) {
  return (
    <div>{src.children.map((e) => {
        return e
    })}</div>
  )
}
