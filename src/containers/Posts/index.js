import React from 'react'

export default function Blogs(props) {
    const data = props.pageContext
  return (
    <div>
        <h3>{JSON.stringify(data)}</h3>
        <h3>{JSON.stringify(data)}</h3>
        <h3>{JSON.stringify(data)}</h3>
        <h3>{JSON.stringify(data)}</h3>
        <h3>{JSON.stringify(data)}</h3>
    </div>
  )
}
