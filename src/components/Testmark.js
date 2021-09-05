import * as React from 'react'
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

    //console.log(data)

    return (
        <>
            <h3>hola</h3>
            <Markdown
                components={{
                    a: ({ node, children}) => {
                        //console.log(node)
                        //console.log(children)

                        if(node.properties.title && node.properties.title.includes('youtube-embed')) {
                            return (<iframe src={node.properties.href} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                                style={{margin: "0 auto", display: "block", width: "100%", height: 768*0.56, marginBottom: 30}}
                                ></iframe>
                            )
                        }
                        
                        return(<a href={node.properties.href} target="_Blank" rel="noreferrer">
                            {children}
                        </a>)                  
                    },
                    img: (i) => {
                        console.log(i)
                        return(<div>
                            <img src={i.src} alt={i.alt} />
                            <p>"aqui va una imagen"</p>
                        </div>)
                    }
                }}
            >
                {data.sanityMarkDownPost.ArticleMarkDown}
            </Markdown>
        </>
    )
}

export default TestMark