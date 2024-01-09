import React from 'react'

export default function TabItems() {
  return (
    <ul className="nav nav-tabs" role="tablist">
        <tabItem></tabItem>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">
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
              className="icon icon-tabler icon-tabler-float-center"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect width={6} height={6} x={9} y={5} rx={1} />
              <line x1={4} y1={7} x2={5} y2={7} />
              <line x1={4} y1={11} x2={5} y2={11} />
              <line x1={19} y1={7} x2={20} y2={7} />
              <line x1={19} y1={11} x2={20} y2={11} />
              <line x1={4} y1={15} x2={20} y2={15} />
              <line x1={4} y1={19} x2={20} y2={19} />
            </svg>
            Watermark
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-3">
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
              className="icon icon-tabler icon-tabler-shield-lock"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <circle cx={12} cy={11} r={1} />
              <line x1={12} y1={12} x2={12} y2="14.5" />
            </svg>
            Access Control
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-4">
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
              className="icon icon-tabler icon-tabler-wallet"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
            Billing
          </a>
        </li>
      </ul>
  )
}
