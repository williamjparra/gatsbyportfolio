/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from './NavBar';
import Footer from './Footer';

import './css/layout.css'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <h3>
            {data.site.siteMetadata?.title || `WilliamDev`}
          </h3>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
