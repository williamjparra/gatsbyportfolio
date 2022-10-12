import React from 'react'
import { navigate } from 'gatsby'
import './index.css'

export default function Pagination({currentPage = 1, totalPages = 10}) {
  const pages = []
    
  for(let i = 0; i < totalPages; i++) {
    pages.push(i + 1)
  }

  const goNextPage = () => {
    return currentPage === totalPages 
    ? ""
    : navigate(`/blog/${currentPage + 1}`) 
  }

  const goPreviousPage = () => {
    return currentPage === 1 
    ? ""
    : currentPage === 2 
    ? navigate(`/blog`)
    : navigate(`/blog/${currentPage - 1}`)
  }

  const goToPage = (pageindex) => {
    return pageindex === currentPage 
    ? ""
    : pageindex === 1
    ? navigate(`/blog`)
    : navigate(`/blog/${pageindex}`)
  }

  return (
    <div className="pagination-container">
        <div 
          className={`go-right-button 
            ${currentPage === 1 
            ? "disbled" 
            : ""}`
          }
          role="tabbable"
          onClick={goPreviousPage}
        >
            <span className="items">{"<"}</span>
        </div>
        { 
          pages.map((page, index) => <div
              onClick={() => goToPage(page)}
              key={index} 
              className={`pagination-index-button ${
                page === currentPage 
                ? "active" 
                : "unactive"
              }`}
            >
              <span className="items">
                {page}
              </span>
            </div>) 
        }
        <div 
          className={`go-left-button
            ${currentPage === totalPages 
            ? "disbled" 
            : ""}`
          }
            onClick={goNextPage}
        >
          <span className="items">
            {">"}
          </span>
        </div>
    </div>
  )
}
