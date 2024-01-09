import React from 'react'

export default function PropertiesTabelHeader() {
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
          <div className="position-relative">
            <input className="form-control myformcontrol" type="search" />
            <button className="searchicon-btn small-icn" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-search"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
          <label className="form-label gilroybold table-hd-label">
            Property
          </label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother" id="typeDropdown">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu dropdown-menu-start">
              <div />
              <div id="typeTabs" className="mytabs">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Tab 1
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-2"
                    >
                      Tab 2
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-1">
                    <div className="twopartdropdowndiv">
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-44"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-44"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-45"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-45"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-46"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-46"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-47"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-47"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-48"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-48"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-49"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-49"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-50"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-50"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-71"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-71"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-72"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-72"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-73"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-73"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-74"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-74"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-75"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-75"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-76"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-76"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-77"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-77"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-78"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-78"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-79"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-79"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-80"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-80"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-2">
                    <div className="twopartdropdowndiv">
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-12"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-12"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-13"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-13"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-14"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-14"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-19"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-19"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-11"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-11"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-15"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-15"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-43"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-43"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-42"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-42"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-41"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-41"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-40"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-40"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-39"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-39"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-16"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-16"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-17"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-17"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-18"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-18"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-26"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-26"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-37"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-37"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-38"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-38"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">
            Category
          </label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother" id="typeDropdown">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu dropdown-menu-start">
              <div />
              <div id="typeTabs" className="mytabs">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Tab 1
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      role="tab"
                      data-bs-toggle="tab"
                      href="#tab-2"
                    >
                      Tab 2
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-1">
                    <div className="twopartdropdowndiv">
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-44"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-44"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-45"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-45"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-46"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-46"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-47"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-47"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-48"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-48"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-49"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-49"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-50"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-50"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-71"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-71"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-72"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-72"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-73"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-73"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-74"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-74"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-75"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-75"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-76"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-76"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-77"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-77"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-78"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-78"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-79"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-79"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-80"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-80"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-2">
                    <div className="twopartdropdowndiv">
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-12"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-12"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-13"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-13"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-14"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-14"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-19"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-19"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-11"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-11"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-15"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-15"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-43"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-43"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-42"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-42"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-41"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-41"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-40"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-40"
                          >
                            6+
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-39"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-39"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                      <div className="radiolist monolabel">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-16"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-16"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-17"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-17"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-18"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-18"
                          >
                            3
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-26"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-26"
                          >
                            4
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-37"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-37"
                          >
                            5
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-38"
                            name="bathroom"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-38"
                          >
                            6+
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">Type</label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu">
              <div>
                <label className="form-label mainlabel">Bedrooms</label>
                <div className="radiolist monolabel">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-133"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-133">
                      Studio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-134"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-134">
                      1
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-135"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-135">
                      2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-136"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-136">
                      3
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-137"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-137">
                      4
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-138"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-138">
                      5
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-139"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-139">
                      6
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-140"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-140">
                      7
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-141"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-141">
                      8+
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">Size</label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu">
              <div>
                <label className="form-label mainlabel">Bedrooms</label>
                <div className="radiolist monolabel">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-142"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-142">
                      Studio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-143"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-143">
                      1
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-144"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-144">
                      2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-145"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-145">
                      3
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-146"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-146">
                      4
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-147"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-147">
                      5
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-148"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-148">
                      6
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-149"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-149">
                      7
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-150"
                      name="bedroom"
                    />
                    <label className="form-check-label" htmlFor="formCheck-150">
                      8+
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">
            Offering
          </label>
          <label className="form-label gilroybold table-hd-label">
            Offering
          </label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu">
              <div className="pricerangediv">
                <label className="form-label text-center d-block mb-3">
                  Price Range
                </label>
                <div className="filterlistbuttons">
                  <div className="d-flex gap-1 mb-3">
                    <div className="w-100 rangeleftrighttdiv">
                      <p className="text-center gilroybold m-0">Min</p>
                    </div>
                    <div className="w-100 rangeleftrighttdiv">
                      <p className="text-center gilroybold m-0">Max</p>
                    </div>
                  </div>
                  <div className="d-flex gap-1 mb-3" fil>
                    <div className="w-100 rangeleftrighttdiv">
                      <input
                        className="form-control"
                        type="number"
                        placeholder={0}
                      />
                    </div>
                    <div className="w-100 rangeleftrighttdiv">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Any"
                      />
                    </div>
                  </div>
                  <div
                    id="filterbuttons-1"
                    className="d-flex gap-1 filterbuttons"
                  >
                    <div className="rangeleftrighttdiv makeitscrollable">
                      <button className="rangefilterbtn" type="button">
                        0
                      </button>
                      <button className="rangefilterbtn" type="button">
                        1000
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                    </div>
                    <div className="rangeleftrighttdiv makeitscrollable">
                      <button className="rangefilterbtn" type="button">
                        0
                      </button>
                      <button className="rangefilterbtn" type="button">
                        1000
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">Price</label>
        </div>
        <div className="flex-table-cl">
          <div className="dropdown myinputdropdownmother">
            <button
              className="btn btn-light dropdown-toggle myinput myinputdropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
            >
               Any 
            </button>
            <div className="dropdown-menu">
              <div className="pricerangediv">
                <label className="form-label text-center d-block mb-3">
                  Price Range
                </label>
                <div className="filterlistbuttons">
                  <div className="d-flex gap-1 mb-3">
                    <div className="w-100 rangeleftrighttdiv">
                      <p className="text-center gilroybold m-0">Min</p>
                    </div>
                    <div className="w-100 rangeleftrighttdiv">
                      <p className="text-center gilroybold m-0">Max</p>
                    </div>
                  </div>
                  <div className="d-flex gap-1 mb-3" fil>
                    <div className="w-100 rangeleftrighttdiv">
                      <input
                        className="form-control"
                        type="number"
                        placeholder={0}
                      />
                    </div>
                    <div className="w-100 rangeleftrighttdiv">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Any"
                      />
                    </div>
                  </div>
                  <div
                    id="filterbuttons-2"
                    className="d-flex gap-1 filterbuttons"
                  >
                    <div className="rangeleftrighttdiv makeitscrollable">
                      <button className="rangefilterbtn" type="button">
                        0
                      </button>
                      <button className="rangefilterbtn" type="button">
                        1000
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                    </div>
                    <div className="rangeleftrighttdiv makeitscrollable">
                      <button className="rangefilterbtn" type="button">
                        0
                      </button>
                      <button className="rangefilterbtn" type="button">
                        1000
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                      <button className="rangefilterbtn" type="button">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="form-label gilroybold table-hd-label">Agent</label>
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
