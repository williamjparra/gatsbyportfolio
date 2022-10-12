import React from 'react'
import PDFContainer from '../containers/CV'
import { BasicContainer, BodyContainer } from '../styles/component'

export default function curriculum() {
  return (
    <BasicContainer>
      <BodyContainer>
        <PDFContainer/>
      </BodyContainer>
    </BasicContainer>
  )
}
