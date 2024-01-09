import React from 'react'

export default function Menu() {
  return (
    <>
    <div className="fixed-bottom d-lg-none">
        <nav className="navbar navbar-light navbar-expand fixed-bottom bottomnavbar">
          <div className="container-fluid">
            <ul className="navbar-nav border rounded-0 fixed-bottom" style={{background: 'var(--bs-white)'}}>
              <li className="nav-item"><a className="nav-link" href="properties.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-chart-line">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={19} x2={20} y2={19} />
                    <polyline points="4 15 8 9 12 11 16 6 20 10" />
                  </svg>
                  <p className="mb-0">Dashboard</p>
                </a></li>
              <li className="nav-item"><a className="nav-link active" href="properties.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-building-community">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                    <line x1={13} y1={7} x2={13} y2="7.01" />
                    <line x1={17} y1={7} x2={17} y2="7.01" />
                    <line x1={17} y1={11} x2={17} y2="11.01" />
                    <line x1={17} y1={15} x2={17} y2="15.01" />
                  </svg>
                  <p className="mb-0">Properties</p>
                </a></li>
              <li className="nav-item"><a className="nav-link" href="blog.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-paperclip">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                  </svg>
                  <p className="mb-0">Leads</p>
                </a></li>
              <li className="nav-item"><a className="nav-link" href="guides.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-route">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={6} cy={19} r={2} />
                    <circle cx={18} cy={5} r={2} />
                    <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
                  </svg>
                  <p className="mb-0">Owners</p>
                </a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
