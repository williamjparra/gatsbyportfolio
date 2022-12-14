import React, { useState, createContext } from 'react'

export const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const [ toggle, setToggle ] = useState(false)

    const animationButton = () => {
        setToggle(!toggle)
    }

    return (
        <BlogContext.Provider value={{
            toggle,
            animationButton
        }}>
            {children}
        </BlogContext.Provider>
    )

}