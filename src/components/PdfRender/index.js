import React from 'react'

export default function PdfRender({path}) {
  return (
    <iframe
        src={path}
        width='100%'
        height='720px'
        title='cv'
    >
    </iframe>
  )
}
