import React, {useEffect} from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import PdfRender from '../../components/PdfRender'

export default function PDFContainer(props) {
    const {file} = useStaticQuery(graphql`
        query projectsAndData {
            file(name: {eq: "cv-william"}) {
                publicURL
                dir
                name
            }
        }
    `)

    useEffect(() => {}, [])
        console.log(file)
  return (
    <>
        <PdfRender path={file.publicURL}/>
    </>
  )
}

