import React from 'react'
import { navigate } from 'gatsby'
import './index.css'

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
    <article onClick={moveToLink} className="article-post">
      <div className="article-left">
        {
          mainImage ? <img
            className="post-image"
            src={mainImage.asset.url}
            alt={imageAlt ? imageAlt : "preview image"}
          /> : <h3 className="title-faded">{title}</h3>
        }
      </div>
      <div className="article-right">
        {mainImage && <h3 className="post-title">{title}</h3>}
        <p>
          {previewText.map(({children}) => `${children.map(({text}) => text)}`)}
        </p>
      </div>      
      <small>
        <b>Published:</b> {publishedAt}
      </small>
    </article>
  )
}
