import * as React from "react"
import TestMark from '../components/Testmark'

const IndexPage = () => (
  <>
    <h1>
      esto es main
    </h1>
    <p>
      hi
    </p>
    <div style={{
      maxWidth: 768,
      margin: "0 auto"
    }}>
      <TestMark />
    </div>
  </>
)

export default IndexPage
