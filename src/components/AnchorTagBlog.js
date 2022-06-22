import React from 'react'

export default function anchor({node, children}) {

    return (
        <>
            {
                node.properties.title && node.properties.title.includes('youtube-embed') ? <div style={{
                        position: "relative",
                        paddingBottom: "56.25"
                    }}
                >
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
                </div> : <a 
                    href={node.properties.href} 
                    target="_Blank" 
                    rel="noreferrer">
                        {children}
                    </a>
            }
        </>
    )
}
