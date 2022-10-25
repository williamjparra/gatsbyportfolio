import React, {useEffect} from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import PdfRender from '../../components/PdfRender'

export default function PDFContainer(props) {
    const {file} = useStaticQuery(graphql`
        query projectsAndData {
            file(name: {eq: "cvwjp"}) {
                publicURL
            }
        }
    `)

    useEffect(() => {}, [])
  return (
    <>
        <PdfRender path={file.publicURL}/>
    </>
  )
}

