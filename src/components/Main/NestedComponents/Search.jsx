import React from 'react'

export default function Search() {
  return (
    <div className="position-relative">
    <div className="container">
    <form>
            <div className="crm-search-div">
              <div className="row gy-2 gy-md-0 row-cols-1 row-cols-md-2 m-0">
                <div className="col d-grid align-items-center">
                  <h4 className="mb-0">Leads</h4>
                </div>
                <div className="col p-0">
                  <div>
                    <div>
                      <div className="myinputdiv">
                        <div className="position-relative"><input className="form-control myinput" type="text" placeholder="Search" /><button className="searchicon-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
          </div>
  )
}
