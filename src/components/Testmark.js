import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Markdown from 'react-markdown'

const TestMark = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        sanityMarkDownPost {
            mainImage {
                asset {
                    source {
                        url
                    }
                }
            }
            slug {
                current
            }
            title
            ArticleMarkDown
            }
        }
    `); 

    return (
        <>
            <h3>hola</h3>
            <Markdown
                components={{
                    a: ({ node, children}) => {

                        if(node.properties.title && node.properties.title.includes('youtube-embed')) {
                            return (
                                <div style={{
                                    position: "relative",
                                    paddingBottom: "56.25"
                                }}>
                                    <iframe src={node.properties.href}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen 
                                        style={{
                                            margin: "0 auto", 
                                            display: "block",
                                            width: "90%",
                                            maxWidth: 768, 
                                            height: 768*0.56 /*{videoPlayer.current.clientWidth*0.56}*/, 
                                            marginBottom: 30
                                        }}
                                    >
                                    </iframe>
                                </div>
                            )
                        }
                        
                        return(<a href={node.properties.href} target="_Blank" rel="noreferrer">
                            {children}
                        </a>)                  
                    },
                    img: (i) => {
                        return(<img src={i.src} alt={i.alt} />)
                    }
                }}
            >
                {data.sanityMarkDownPost.ArticleMarkDown}
            </Markdown>
        </>
    )
}

export default TestMark