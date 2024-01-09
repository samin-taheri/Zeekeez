import React from 'react'

export default function ButtonWithIcon() {
  return (
    <button className="btn btn-dark mybtn" type="button">
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
          className="icon icon-tabler icon-tabler-device-floppy"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
          <circle cx={12} cy={14} r={2} />
          <polyline points="14 4 14 8 8 8 8 4" />
        </svg>
        Save
      </button>
  )
}
