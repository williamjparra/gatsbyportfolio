import React from 'react'
import { navigate } from 'gatsby'

export default function Component({posts}) {

  const {
    previewText,
    publishedAt,
    mainImage,
    imageAlt,
    title,
    slug
  } = posts

  const moveToLink = () => {
    navigate(`/posts/${slug.current}`)
  }

  return (
    <article onClick={moveToLink}>
      <h3>{title}</h3>
      <p>
        {previewText.map(({children}) => `${children.map(({text}) => text)}`)}
      </p>
      {
        mainImage && <img 
          src={mainImage.asset.url} 
          alt={imageAlt ? imageAlt : "preview image"}
        />
      }
      <small>
        {publishedAt}
      </small>
    </article>
  )
}
