import React from 'react'

export default function TabItem() {
  return (
    <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          role="tab"
          data-bs-toggle="tab"
          href="#tab-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-building-skyscraper"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={3} y1={21} x2={21} y2={21} />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <line x1={9} y1={9} x2={9} y2="9.01" />
            <line x1={9} y1={12} x2={9} y2="12.01" />
            <line x1={9} y1={15} x2={9} y2="15.01" />
            <line x1={9} y1={18} x2={9} y2="18.01" />
          </svg>
          Profile
        </a>
      </li>
  )
}
