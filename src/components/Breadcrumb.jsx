import React from 'react'

export default function Breadcrumb() {
  return (
    <div className="breadcrumbdiv ps-0 withbacklink ps-3 mb-4">
        <ol className="breadcrumb mb-md-0">
          <li className="breadcrumb-item">
            <a href="#">
              <span>Dashboard</span>
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <span>Company Profile</span>
            </a>
          </li>
        </ol>
      </div>
  )
}
