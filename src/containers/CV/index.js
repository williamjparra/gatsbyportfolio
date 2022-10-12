import React, {useEffect} from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import PdfRender from '../../components/PdfRender'
import { PDFViewer } from '@react-pdf/renderer';

export default function PDFContainer(props) {
    const {file} = useStaticQuery(graphql`
        query projectsAndData {
            file(id: {eq: "14c3bebf-1890-51ef-8ec2-1acbbb61b867"}) {
                publicURL
                dir
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

