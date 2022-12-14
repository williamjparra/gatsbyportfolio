import React from 'react'
import Nav from '../../components/navbar/index'
import Footer from '../../components/Footer'

import './css/index.css'

export default function Layout({children}) {
  return (
    <>
        <Nav />
        <main className="main-container">
            {children}
        </main>
        <Footer />
    </>
  )
}
