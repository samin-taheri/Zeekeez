import React from 'react'
import Breadcrumb from './Breadcrumb'
import Search from './Search'

export default function Container({ children }) {
  return (
    <div>
      <div className="position-relative">

        <Search />

        <div className="mydivider" />
      </div>
      <div className="container">
        <Breadcrumb />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
