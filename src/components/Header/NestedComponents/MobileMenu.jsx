import React from 'react'

export default function MobileMenu() {
  return (
    <>
    <div id="mymenu" className="categoriesmobilemenu">
        <ul className="list-unstyled hide" id="mymenulist">
          <li><a href="#"><span className="gilroybold">Buy</span>&nbsp;Properties</a></li>
          <li><a href="#"><span className="gilroybold">Rent</span>&nbsp;Properties</a></li>
          <li>
            <div>
              <hr />
            </div>
          </li>
          <li><a href="#"><span className="gilroybold">Buy</span>&nbsp;Luxury Properties</a></li>
          <li><a href="#"><span className="gilroybold">Rent</span>&nbsp;Luxury Properties</a></li>
          <li>
            <div>
              <hr />
            </div>
          </li>
          <li><a href="#"><span className="gilroybold">Buy</span>&nbsp;Commercial </a></li>
          <li><a href="#"><span className="gilroybold">Rent</span>&nbsp;Commercial </a></li>
        </ul>
      </div>
    </>
  )
}
