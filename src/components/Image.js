import React from 'react'
//import Image from 'gatsby-image'

export default function ImageComponent({src, alt}) {
  console.log("data", src, alt)

  return (
    <img
        src={src}
        alt={alt}
        style={{
            width: "100%",
            height: "auto"
        }}
    />
  )
}
