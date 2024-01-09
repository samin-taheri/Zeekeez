import React from 'react'

export default function SearchBarWithHeading() {
  return (
    <div className="flex-table">
        <div className="flex-table-cl">
          <input
            type="checkbox"
            className="form-check-input m-0 proptable-checkbox"
          />
          <span className="select-listing-span">Select this listing</span>
        </div>
        <div className="flex-table-cl">
          <div>
            <div>
              <img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg" />
            </div>
            <div className="proptab-prophead">
              <p>Villa with lake views</p>
              <div className="cardfeatures">
                <div className="cardfeature">
                  <i className="la la-bed" />
                  <span>2</span>
                </div>
                <div className="cardfeature">
                  <i className="las la-bath" />
                  <span>2</span>
                </div>
              </div>
              <p>Sektor J, Emirated Hills</p>
            </div>
          </div>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Category</span>
          <span>Residential</span>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Type</span>
          <span>Apartment</span>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Size</span>
          <span>24,000sqft</span>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Offering</span>
          <span>Sale</span>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Price</span>
          <span>
            54,000 <strong>$</strong>
          </span>
        </div>
        <div className="flex-table-cl">
          <span className="table-col-mobile-title">Agent</span>
          <span>Maria H.</span>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother">
            <button
              className="dropdown-toggle propdrop"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button" 
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-three-dots-vertical"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                First Item
              </a>
              <a className="dropdown-item" href="#">
                Second Item
              </a>
              <a className="dropdown-item" href="#">
                Third Item
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
