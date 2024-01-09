import React from 'react'

export default function NewLeads(props) {

  return (
    <>
  <div>
  <main class="mainformobile">          
          <div class="horizontal-tabs-mother">
              <form>
                  <div class="horizontal-tabs">
                      <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="/leads/create/personalinformation"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-user">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                  </svg>Personal Information</a></li>
                          <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/leads/create/properties"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-building">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <line x1="3" y1="21" x2="21" y2="21"></line>
                                      <line x1="9" y1="8" x2="10" y2="8"></line>
                                      <line x1="9" y1="12" x2="10" y2="12"></line>
                                      <line x1="9" y1="16" x2="10" y2="16"></line>
                                      <line x1="14" y1="8" x2="15" y2="8"></line>
                                      <line x1="14" y1="12" x2="15" y2="12"></line>
                                      <line x1="14" y1="16" x2="15" y2="16"></line>
                                      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                  </svg>Properties</a></li>
                          <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/leads/create/documents"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-file">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                  </svg>Documents</a></li>
                          <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/leads/create/actions"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-messages">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                                  </svg>Actions</a></li>
                      </ul>
                      <div class="tab-content">
                          <div class="tab-pane active" role="tabpanel" id="tab-1">
                              <div class="settings-head">
                                  <div class="settingsheading-child">
                                      <h2>{props.name}</h2>
                                      <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                  <circle cx="12" cy="14" r="2"></circle>
                                                  <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                              </svg>Save</button></div>
                                  </div>
                                  <hr/>
                              </div>
                              <div class="settings-content">
                                  <div class="settings-section">
                                      <div class="mb-5">
                                          <h3>Information</h3>
                                          <div class="row gy-3 row-cols-1 row-cols-lg-2">
                                              <div class="col"><label class="form-label">First Name*</label><input class="form-control myinput" type="text" placeholder="Your Company Name" name="company-name"/></div>
                                              <div class="col"><label class="form-label">Last Name*</label><input class="form-control myinput" type="text" placeholder="Your Last Name" name="company-lastname"/></div>
                                              <div class="col"><label class="form-label">Email*</label><input class="form-control myinput" type="email" placeholder="your@email.com" name="company-email"/></div>
                                              <div class="col"><label class="form-label">Mobile</label><input class="form-control myinput" type="tel" placeholder="000" name="company-mobile"/></div>
                                              <div class="col"><label class="form-label">Phone*</label><input class="form-control myinput" type="tel" placeholder="000" name="company-phone"/></div>
                                          </div>
                                      </div>
                                      <div class="row gy-5">
                                          <div class="col-12 col-lg-8">
                                              <div class="settings-section">
                                                  <h3>Address</h3>
                                                  <div class="row gy-3">
                                                      <div class="col-12"><label class="form-label">Address</label><textarea class="form-control myinput" rows="5" name="company-address"></textarea></div>
                                                      <div class="col-12 col-lg-6"><label class="form-label">Country</label><select class="form-select myinput" name="company-country">
                                                              <optgroup label="This is a group">
                                                                  <option value="12" selected="">Select Country</option>
                                                                  <option value="13">This is item 2</option>
                                                                  <option value="14">This is item 3</option>
                                                              </optgroup>
                                                          </select></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" role="tabpanel" id="tab-2">
                              <div class="settings-head">
                                  <div class="settingsheading-child">
                                      <h2>Properties</h2>
                                      <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                  <circle cx="12" cy="14" r="2"></circle>
                                                  <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                              </svg>Save</button></div>
                                  </div>
                                  <hr/>
                              </div>
                              <div class="settings-content">
                                  <div class="settings-section">
                                      <div class="d-flex justify-content-between">
                                          <h3>Criteria</h3>
                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                  </svg></button>
                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                          </div>
                                      </div>
                                      <div class="billing-card">
                                          <div class="row row-cols-2 row-cols-lg-4">
                                              <div class="col">
                                                  <div><label class="form-label form-text">No of bathrooms*</label><input class="form-control myformcontrol" type="number" placeholder="0"/></div>
                                              </div>
                                              <div class="col">
                                                  <div><label class="form-label form-text">No of bathrooms*</label><input class="form-control myformcontrol" type="number" placeholder="0"/></div>
                                              </div>
                                              <div class="col">
                                                  <div><label class="form-label form-text">No of bedrooms*</label><input class="form-control myformcontrol" type="number" placeholder="0"/></div>
                                              </div>
                                              <div class="col">
                                                  <div><label class="form-label form-text">No of bedrooms*</label><input class="form-control myformcontrol" type="number" placeholder="0"/></div>
                                              </div>
                                          </div>
                                          <div class="mb-4"><label class="form-label form-text">Location*</label><input class="form-select myformcontrol" list="locations" name="locations" id="locations-input-list"/><datalist id="locations"><option value="Emirates Hill"/><option value="Dubai"/></datalist></div><button class="btn btn-dark rounded-pill mybtn px-4" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-search">
                                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                              </svg>Search</button>
                                      </div>
                                  </div>
                                  <div class="settings-section">
                                      <div class="d-flex justify-content-between">
                                          <h3>Selected Properties</h3>
                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                  </svg></button>
                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                          </div>
                                      </div><a class="text-decoration-none text-dark" href="#" data-bs-target="#selected-properties-modal" data-bs-toggle="modal">
                                          <div class="billing-card d-flex justify-content-between">
                                              <h2 class="d-flex align-items-center justify-content-between mb-0 w-100"><span class="d-flex gap-2"><span id="selected-property-number">0</span><span>Properties Selected</span></span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-right">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                      <polyline points="9 6 15 12 9 18"></polyline>
                                                  </svg></h2>
                                          </div>
                                      </a>
                                      <div class="modal fade" role="dialog" tabindex="-1" id="selected-properties-modal">
                                          <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h4 class="modal-title"><span class="me-2">5</span>Selected Properties</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <div>
                                                          <form>
                                                              <div class="propertiestable">
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </form>
                                                      </div>
                                                  </div>
                                                  <div class="modal-footer"><button class="btn btn-light mybtn" type="button" data-bs-dismiss="modal">Close</button></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="settings-section">
                                      <div class="d-flex justify-content-between">
                                          <h3 class="mb-0">Comparable Listings</h3>
                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                  </svg></button>
                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                          </div>
                                      </div><small class="form-text mb-4 d-block">Select the listinga you want to compare by clicking on them</small>
                                      <div class="billing-card">
                                          <div class="row row-cols-1 row-cols-lg-2 comparable-list-row">
                                              <div class="col">
                                                  <div class="listing-compare-check">
                                                      <div class="comparable-list-card-mother-div"><input type="checkbox" class="compare-check-input"/>
                                                          <div><img class="img-fluid" src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                          <div class="proptab-prophead">
                                                              <p>Villa with lake views</p>
                                                              <div class="cardfeatures">
                                                                  <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                  <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                              </div>
                                                              <p>Sektor J, Emirated Hills</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col">
                                                  <div class="listing-compare-check">
                                                      <div class="comparable-list-card-mother-div"><input type="checkbox" class="compare-check-input"/>
                                                          <div><img class="img-fluid" src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                          <div class="proptab-prophead">
                                                              <p>Villa with lake views</p>
                                                              <div class="cardfeatures">
                                                                  <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                  <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                              </div>
                                                              <p>Sektor J, Emirated Hills</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="modal fade" role="dialog" tabindex="-1" id="selected-properties-modal-1">
                                          <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h4 class="modal-title"><span class="me-2">5</span>Selected Properties</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <div>
                                                          <form>
                                                              <div class="propertiestable">
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="position-relative"><input class="form-control myformcontrol" type="search"/><button class="searchicon-btn small-icn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-search">
                                                                                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                                                  </svg></button></div><label class="form-label gilroybold table-hd-label">Property</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother" id="typeDropdown-3"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu dropdown-menu-start">
                                                                                  <div></div>
                                                                                  <div id="typeTabs-3" class="mytabs">
                                                                                      <ul class="nav nav-tabs nav-justified" role="tablist">
                                                                                          <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">Tab 1</a></li>
                                                                                          <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Tab 2</a></li>
                                                                                      </ul>
                                                                                      <div class="tab-content">
                                                                                          <div class="tab-pane" role="tabpanel" id="tab-9">
                                                                                              <div class="twopartdropdowndiv">
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-16" name="bathroom"/><label class="form-check-label" for="formCheck-16">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-17" name="bathroom"/><label class="form-check-label" for="formCheck-17">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-18" name="bathroom"/><label class="form-check-label" for="formCheck-18">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-19" name="bathroom"/><label class="form-check-label" for="formCheck-19">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-26" name="bathroom"/><label class="form-check-label" for="formCheck-26">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-37" name="bathroom"/><label class="form-check-label" for="formCheck-37">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-38" name="bathroom"/><label class="form-check-label" for="formCheck-38">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-39" name="bathroom"/><label class="form-check-label" for="formCheck-39">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-40" name="bathroom"/><label class="form-check-label" for="formCheck-40">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-41" name="bathroom"/><label class="form-check-label" for="formCheck-41">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-42" name="bathroom"/><label class="form-check-label" for="formCheck-42">6+</label></div>
                                                                                                  </div>
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-43" name="bathroom"/><label class="form-check-label" for="formCheck-43">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-44" name="bathroom"/><label class="form-check-label" for="formCheck-44">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-45" name="bathroom"/><label class="form-check-label" for="formCheck-45">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-46" name="bathroom"/><label class="form-check-label" for="formCheck-46">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-47" name="bathroom"/><label class="form-check-label" for="formCheck-47">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-48" name="bathroom"/><label class="form-check-label" for="formCheck-48">6+</label></div>
                                                                                                  </div>
                                                                                              </div>
                                                                                          </div>
                                                                                          <div class="tab-pane" role="tabpanel" id="tab-10">
                                                                                              <div class="twopartdropdowndiv">
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-49" name="bathroom"/><label class="form-check-label" for="formCheck-49">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-50" name="bathroom"/><label class="form-check-label" for="formCheck-50">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-71" name="bathroom"/><label class="form-check-label" for="formCheck-71">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-72" name="bathroom"/><label class="form-check-label" for="formCheck-72">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-73" name="bathroom"/><label class="form-check-label" for="formCheck-73">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-74" name="bathroom"/><label class="form-check-label" for="formCheck-74">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-75" name="bathroom"/><label class="form-check-label" for="formCheck-75">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-76" name="bathroom"/><label class="form-check-label" for="formCheck-76">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-77" name="bathroom"/><label class="form-check-label" for="formCheck-77">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-78" name="bathroom"/><label class="form-check-label" for="formCheck-78">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-79" name="bathroom"/><label class="form-check-label" for="formCheck-79">6+</label></div>
                                                                                                  </div>
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-80" name="bathroom"/><label class="form-check-label" for="formCheck-80">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-110" name="bathroom"/><label class="form-check-label" for="formCheck-110">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-111" name="bathroom"/><label class="form-check-label" for="formCheck-111">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-112" name="bathroom"/><label class="form-check-label" for="formCheck-112">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-113" name="bathroom"/><label class="form-check-label" for="formCheck-113">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-114" name="bathroom"/><label class="form-check-label" for="formCheck-114">6+</label></div>
                                                                                                  </div>
                                                                                              </div>
                                                                                          </div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Category</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother" id="typeDropdown-4"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu dropdown-menu-start">
                                                                                  <div></div>
                                                                                  <div id="typeTabs-4" class="mytabs">
                                                                                      <ul class="nav nav-tabs nav-justified" role="tablist">
                                                                                          <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">Tab 1</a></li>
                                                                                          <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Tab 2</a></li>
                                                                                      </ul>
                                                                                      <div class="tab-content">
                                                                                          <div class="tab-pane" role="tabpanel" id="tab-11">
                                                                                              <div class="twopartdropdowndiv">
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-115" name="bathroom"/><label class="form-check-label" for="formCheck-115">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-116" name="bathroom"/><label class="form-check-label" for="formCheck-116">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-117" name="bathroom"/><label class="form-check-label" for="formCheck-117">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-118" name="bathroom"/><label class="form-check-label" for="formCheck-118">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-119" name="bathroom"/><label class="form-check-label" for="formCheck-119">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-120" name="bathroom"/><label class="form-check-label" for="formCheck-120">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-121" name="bathroom"/><label class="form-check-label" for="formCheck-121">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-122" name="bathroom"/><label class="form-check-label" for="formCheck-122">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-123" name="bathroom"/><label class="form-check-label" for="formCheck-123">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-124" name="bathroom"/><label class="form-check-label" for="formCheck-124">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-125" name="bathroom"/><label class="form-check-label" for="formCheck-125">6+</label></div>
                                                                                                  </div>
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-126" name="bathroom"/><label class="form-check-label" for="formCheck-126">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-127" name="bathroom"/><label class="form-check-label" for="formCheck-127">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-128" name="bathroom"/><label class="form-check-label" for="formCheck-128">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-129" name="bathroom"/><label class="form-check-label" for="formCheck-129">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-130" name="bathroom"/><label class="form-check-label" for="formCheck-130">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-131" name="bathroom"/><label class="form-check-label" for="formCheck-131">6+</label></div>
                                                                                                  </div>
                                                                                              </div>
                                                                                          </div>
                                                                                          <div class="tab-pane" role="tabpanel" id="tab-12">
                                                                                              <div class="twopartdropdowndiv">
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-132" name="bathroom"/><label class="form-check-label" for="formCheck-132">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-151" name="bathroom"/><label class="form-check-label" for="formCheck-151">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-152" name="bathroom"/><label class="form-check-label" for="formCheck-152">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-153" name="bathroom"/><label class="form-check-label" for="formCheck-153">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-154" name="bathroom"/><label class="form-check-label" for="formCheck-154">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-155" name="bathroom"/><label class="form-check-label" for="formCheck-155">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-156" name="bathroom"/><label class="form-check-label" for="formCheck-156">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-157" name="bathroom"/><label class="form-check-label" for="formCheck-157">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-158" name="bathroom"/><label class="form-check-label" for="formCheck-158">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-159" name="bathroom"/><label class="form-check-label" for="formCheck-159">6+</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-160" name="bathroom"/><label class="form-check-label" for="formCheck-160">6+</label></div>
                                                                                                  </div>
                                                                                                  <div class="radiolist monolabel">
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-161" name="bathroom"/><label class="form-check-label" for="formCheck-161">1</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-162" name="bathroom"/><label class="form-check-label" for="formCheck-162">2</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-163" name="bathroom"/><label class="form-check-label" for="formCheck-163">3</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-164" name="bathroom"/><label class="form-check-label" for="formCheck-164">4</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-165" name="bathroom"/><label class="form-check-label" for="formCheck-165">5</label></div>
                                                                                                      <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-166" name="bathroom"/><label class="form-check-label" for="formCheck-166">6+</label></div>
                                                                                                  </div>
                                                                                              </div>
                                                                                          </div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Type</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu">
                                                                                  <div><label class="form-label mainlabel">Bedrooms</label>
                                                                                      <div class="radiolist monolabel">
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-167" name="bedroom"/><label class="form-check-label" for="formCheck-167">Studio</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-168" name="bedroom"/><label class="form-check-label" for="formCheck-168">1</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-169" name="bedroom"/><label class="form-check-label" for="formCheck-169">2</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-170" name="bedroom"/><label class="form-check-label" for="formCheck-170">3</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-171" name="bedroom"/><label class="form-check-label" for="formCheck-171">4</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-172" name="bedroom"/><label class="form-check-label" for="formCheck-172">5</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-173" name="bedroom"/><label class="form-check-label" for="formCheck-173">6</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-174" name="bedroom"/><label class="form-check-label" for="formCheck-174">7</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-175" name="bedroom"/><label class="form-check-label" for="formCheck-175">8+</label></div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Size</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu">
                                                                                  <div><label class="form-label mainlabel">Bedrooms</label>
                                                                                      <div class="radiolist monolabel">
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-176" name="bedroom"/><label class="form-check-label" for="formCheck-176">Studio</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-177" name="bedroom"/><label class="form-check-label" for="formCheck-177">1</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-178" name="bedroom"/><label class="form-check-label" for="formCheck-178">2</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-179" name="bedroom"/><label class="form-check-label" for="formCheck-179">3</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-180" name="bedroom"/><label class="form-check-label" for="formCheck-180">4</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-181" name="bedroom"/><label class="form-check-label" for="formCheck-181">5</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-182" name="bedroom"/><label class="form-check-label" for="formCheck-182">6</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-183" name="bedroom"/><label class="form-check-label" for="formCheck-183">7</label></div>
                                                                                          <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-184" name="bedroom"/><label class="form-check-label" for="formCheck-184">8+</label></div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Offering</label><label class="form-label gilroybold table-hd-label">Offering</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu">
                                                                                  <div class="pricerangediv"><label class="form-label text-center d-block mb-3">Price Range</label>
                                                                                      <div class="filterlistbuttons">
                                                                                          <div class="d-flex gap-1 mb-3">
                                                                                              <div class="w-100 rangeleftrighttdiv">
                                                                                                  <p class="text-center gilroybold m-0">Min</p>
                                                                                              </div>
                                                                                              <div class="w-100 rangeleftrighttdiv">
                                                                                                  <p class="text-center gilroybold m-0">Max</p>
                                                                                              </div>
                                                                                          </div>
                                                                                          <div class="d-flex gap-1 mb-3" fil="">
                                                                                              <div class="w-100 rangeleftrighttdiv"><input class="form-control" type="number" placeholder="0"/></div>
                                                                                              <div class="w-100 rangeleftrighttdiv"><input class="form-control" type="number" placeholder="Any"/></div>
                                                                                          </div>
                                                                                          <div id="filterbuttons-3" class="d-flex gap-1 filterbuttons">
                                                                                              <div class="rangeleftrighttdiv makeitscrollable"><button class="rangefilterbtn" type="button">0</button><button class="rangefilterbtn" type="button">1000</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button></div>
                                                                                              <div class="rangeleftrighttdiv makeitscrollable"><button class="rangefilterbtn" type="button">0</button><button class="rangefilterbtn" type="button">1000</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button></div>
                                                                                          </div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Price</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                                              <div class="dropdown-menu">
                                                                                  <div class="pricerangediv"><label class="form-label text-center d-block mb-3">Price Range</label>
                                                                                      <div class="filterlistbuttons">
                                                                                          <div class="d-flex gap-1 mb-3">
                                                                                              <div class="w-100 rangeleftrighttdiv">
                                                                                                  <p class="text-center gilroybold m-0">Min</p>
                                                                                              </div>
                                                                                              <div class="w-100 rangeleftrighttdiv">
                                                                                                  <p class="text-center gilroybold m-0">Max</p>
                                                                                              </div>
                                                                                          </div>
                                                                                          <div class="d-flex gap-1 mb-3" fil="">
                                                                                              <div class="w-100 rangeleftrighttdiv"><input class="form-control" type="number" placeholder="0"/></div>
                                                                                              <div class="w-100 rangeleftrighttdiv"><input class="form-control" type="number" placeholder="Any"/></div>
                                                                                          </div>
                                                                                          <div id="filterbuttons-4" class="d-flex gap-1 filterbuttons">
                                                                                              <div class="rangeleftrighttdiv makeitscrollable"><button class="rangefilterbtn" type="button">0</button><button class="rangefilterbtn" type="button">1000</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button></div>
                                                                                              <div class="rangeleftrighttdiv makeitscrollable"><button class="rangefilterbtn" type="button">0</button><button class="rangefilterbtn" type="button">1000</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button><button class="rangefilterbtn" type="button">Button</button></div>
                                                                                          </div>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div><label class="form-label gilroybold table-hd-label">Agent</label>
                                                                      </div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="flex-table">
                                                                      <div class="flex-table-cl"><input type="checkbox" class="form-check-input m-0 proptable-checkbox"/><span class="select-listing-span">Select this listing</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div>
                                                                              <div><img src="assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg"/></div>
                                                                              <div class="proptab-prophead">
                                                                                  <p>Villa with lake views</p>
                                                                                  <div class="cardfeatures">
                                                                                      <div class="cardfeature"><i class="la la-bed"></i><span>2</span></div>
                                                                                      <div class="cardfeature"><i class="las la-bath"></i><span>2</span></div>
                                                                                  </div>
                                                                                  <p>Sektor J, Emirated Hills</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Category</span><span>Residential</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Type</span><span>Apartment</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Size</span><span>24,000sqft</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Offering</span><span>Sale</span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Price</span><span>54,000&nbsp;<strong>$</strong></span></div>
                                                                      <div class="flex-table-cl"><span class="table-col-mobile-title">Agent</span><span>Maria H.</span></div>
                                                                      <div class="flex-table-cl">
                                                                          <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-three-dots-vertical">
                                                                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                                                                  </svg></button>
                                                                              <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </form>
                                                      </div>
                                                  </div>
                                                  <div class="modal-footer"><button class="btn btn-light mybtn" type="button" data-bs-dismiss="modal">Close</button></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" role="tabpanel" id="tab-3">
                              <div class="settings-head">
                                  <div class="settingsheading-child">
                                      <h2>Documents<span class="numberofheading">(6)</span></h2>
                                      <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                  <circle cx="12" cy="14" r="2"></circle>
                                                  <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                              </svg>Save</button></div>
                                  </div>
                                  <hr/>
                                  <div class="settings-head-footer"><button class="dashedbutton" type="button" data-bs-target="#dragdrop" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-file-upload">
                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                              <line x1="12" y1="11" x2="12" y2="17"></line>
                                              <polyline points="9 14 12 11 15 14"></polyline>
                                          </svg>Upload Other Documents</button>
                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-dots-vertical">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                  <circle cx="12" cy="12" r="1"></circle>
                                                  <circle cx="12" cy="19" r="1"></circle>
                                                  <circle cx="12" cy="5" r="1"></circle>
                                              </svg></button>
                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="settings-content">
                                  <div class="settings-section">
                                      <div class="row gx-4 gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div class="d-grid">
                                                          <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div>
                                                          <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div>
                                                          <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div>
                                                          <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div>
                                                          <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col">
                                              <div class="documentcard"><a class="text-decoration-none" href="#">
                                                      <div>
                                                          <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                  <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                              </svg></div>
                                                          <p class="file-name-mother">Name of the document</p>
                                                      </div>
                                                  </a>
                                                  <hr class="my-2"/>
                                                  <div class="select-type-mother">
                                                      <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                              </svg></button>
                                                          <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="modal fade" role="dialog" tabindex="-1" id="dragdrop">
                                  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                      <div class="modal-content">
                                          <div class="modal-header">
                                              <h4 class="modal-title">Add Document</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body">
                                              <div id="file-input-container" ondrop="dropHandler(event)" ondragover="event.preventDefault()"><input class="form-control file-input-form-control" type="file" id="file-input" multiple=""/>
                                                  <div class="text-center">
                                                      <p class="mb-3">drag and drop your files</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                          <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                                                      </svg>
                                                  </div>
                                              </div>
                                              <div id="file-names"></div>
                                          </div>
                                          <div class="modal-footer"><button class="btn btn-light mybtn" type="button" data-bs-dismiss="modal">Close</button><button class="btn btn-dark mybtn" type="button">Save</button></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" role="tabpanel" id="tab-4">
                              <div class="settings-head">
                                  <div class="settingsheading-child">
                                      <h2>Actions</h2>
                                      <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button" data-bs-target="#addaction" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                              </svg>Add Action</button></div>
                                  </div>
                                  <hr/>
                              </div>
                              <div class="settings-content">
                                  <div class="settings-section">
                                      <div class="actions-big-div">
                                          <div class="actions-border"></div>
                                          <div class="action-box-div">
                                              <div class="actions-box"><label class="form-label action-type">Message</label>
                                                  <div class="received-message">
                                                      <div class="messageaction-div">
                                                          <div class="message-action-image"></div>
                                                          <div class="message-action-content">
                                                              <p class="message-action-name">Lead Name</p>
                                                              <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                          </div>
                                                      </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                  </div>
                                                  <div class="reply-message"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrow-forward reply-icon">
                                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                          <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1"></path>
                                                      </svg>
                                                      <div class="reply-message-content-div">
                                                          <div class="messageaction-div">
                                                              <div class="message-action-image"></div>
                                                              <div class="message-action-content">
                                                                  <p class="message-action-name">Agent Name</p>
                                                                  <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                              </div>
                                                          </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="actions-box"><label class="form-label action-type">Phone Call</label>
                                                  <div class="received-message">
                                                      <div class="phonecallaction-div">
                                                          <div class="message-action-content">
                                                              <p class="phonecallaction-number">+971 234 567 890</p>
                                                              <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                          </div>
                                                      </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="modal fade addactionmodal" role="dialog" tabindex="-1" id="addaction">
                                  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                                      <div class="modal-content">
                                          <div class="modal-header">
                                              <h4 class="modal-title">Add Action</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body">
                                              <div class="horizontal-tabs">
                                                  <ul class="nav nav-tabs non-animated" role="tablist">
                                                      <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#mail-action-add"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                              </svg>Mail</a></li>
                                                      <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="#appointment-action-add"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                              </svg>Appointment</a></li>
                                                      <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#visit-action-add"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                              </svg>Visit</a></li>
                                                      <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#call-action-add"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                              </svg>Call</a></li>
                                                      <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#other-action-add"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                              </svg>Other</a></li>
                                                  </ul>
                                                  <div class="tab-content">
                                                      <div class="tab-pane" role="tabpanel" id="mail-action-add">
                                                          <div class="settings-head">
                                                              <div class="settingsheading-child">
                                                                  <h2>Email</h2>
                                                                  <div class="settingsheading-child-buttons-mother"></div>
                                                              </div>
                                                              <hr/>
                                                          </div>
                                                          <div class="settings-content">
                                                              <div class="settings-section">
                                                                  <div class="row gy-5">
                                                                      <div class="col-12 col-lg-12">
                                                                          <div class="settings-section">
                                                                              <div class="row gy-3">
                                                                                  <div class="col-12"><label class="form-label">Lead Email*</label><input class="form-control myinput" type="email" placeholder="Write email"/></div>
                                                                                  <div class="col-12"><label class="form-label">Object</label><input class="form-control myinput" type="text"/></div>
                                                                                  <div class="col-12"><label class="form-label">Content</label><textarea class="form-control myinput" rows="5" name="company-address"></textarea></div>
                                                                                  <div class="col-12"><label class="form-label">Add File</label><input class="form-control" type="file"/></div>
                                                                                  <div class="col-12"><button class="btn btn-dark mybtn w-100 justify-content-center" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-send">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <line x1="10" y1="14" x2="21" y2="3"></line>
                                                                                              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                                                                                          </svg>Send</button></div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="tab-pane active" role="tabpanel" id="appointment-action-add">
                                                          <div class="settings-head">
                                                              <div class="settingsheading-child">
                                                                  <h2>Appointment</h2>
                                                                  <div class="settingsheading-child-buttons-mother"></div>
                                                              </div>
                                                              <hr/>
                                                          </div>
                                                          <div class="settings-content">
                                                              <div class="settings-section">
                                                                  <div class="row gy-5">
                                                                      <div class="col-12 col-lg-12">
                                                                          <div class="settings-section">
                                                                              <div class="row gy-3">
                                                                                  <div class="col-12"><label class="form-label">Lead Email*</label><input class="form-control myinput" type="date"/></div>
                                                                                  <div class="col-12 col-lg-6"><label class="form-label">Time Start</label><input class="form-control myinput" type="date"/></div>
                                                                                  <div class="col-12 col-lg-6"><label class="form-label">End Time</label><input class="form-control myinput" type="date"/></div>
                                                                                  <div class="col-12"><label class="form-label">Location</label><select class="form-select myinput">
                                                                                          <optgroup label="This is a group">
                                                                                              <option value="12" selected="">This is item 1</option>
                                                                                              <option value="13">This is item 2</option>
                                                                                              <option value="14">This is item 3</option>
                                                                                          </optgroup>
                                                                                      </select></div>
                                                                                  <div class="col-12"><label class="form-label">Title</label><input class="form-control myinput" type="text"/></div>
                                                                                  <div class="col-12"><label class="form-label">Description</label><textarea class="form-control myinput" rows="4"></textarea></div>
                                                                                  <div class="col-12"><label class="form-label">Add File</label><input class="form-control" type="file"/></div>
                                                                                  <div class="col-12"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-check">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <path d="M5 12l5 5l10 -10"></path>
                                                                                          </svg>Save</button></div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="tab-pane" role="tabpanel" id="visit-action-add">
                                                          <div class="settings-head">
                                                              <div class="settingsheading-child">
                                                                  <h2>Documents<span class="numberofheading">(6)</span></h2>
                                                                  <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                              <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                                              <circle cx="12" cy="14" r="2"></circle>
                                                                              <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                                                          </svg>Save</button></div>
                                                              </div>
                                                              <hr/>
                                                              <div class="settings-head-footer"><button class="dashedbutton" type="button" data-bs-target="#dragdrop" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-file-upload">
                                                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                                          <line x1="12" y1="11" x2="12" y2="17"></line>
                                                                          <polyline points="9 14 12 11 15 14"></polyline>
                                                                      </svg>Upload Other Documents</button>
                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-dots-vertical">
                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                              <circle cx="12" cy="12" r="1"></circle>
                                                                              <circle cx="12" cy="19" r="1"></circle>
                                                                              <circle cx="12" cy="5" r="1"></circle>
                                                                          </svg></button>
                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="settings-content">
                                                              <div class="settings-section">
                                                                  <div class="row gx-4 gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div class="d-grid">
                                                                                      <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div>
                                                                                      <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div>
                                                                                      <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div>
                                                                                      <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div>
                                                                                      <div class="docicondiv docx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="documentcard"><a class="text-decoration-none" href="#">
                                                                                  <div>
                                                                                      <div class="docicondiv pdf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                              <path d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"></path>
                                                                                          </svg></div>
                                                                                      <p class="file-name-mother">Name of the document</p>
                                                                                  </div>
                                                                              </a>
                                                                              <hr class="my-2"/>
                                                                              <div class="select-type-mother">
                                                                                  <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Owner Certificate<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                              <polyline points="6 9 12 15 18 9"></polyline>
                                                                                          </svg></button>
                                                                                      <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="modal fade" role="dialog" tabindex="-1" id="dragdrop-1">
                                                              <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                  <div class="modal-content">
                                                                      <div class="modal-header">
                                                                          <h4 class="modal-title">Add Document</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                      </div>
                                                                      <div class="modal-body">
                                                                          <div id="file-input-container-1" ondrop="dropHandler(event)" ondragover="event.preventDefault()"><input class="form-control file-input-form-control" type="file" id="file-input-1" multiple=""/>
                                                                              <div class="text-center">
                                                                                  <p class="mb-3">drag and drop your files</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                                      <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                                                                                  </svg>
                                                                              </div>
                                                                          </div>
                                                                          <div id="file-names-1"></div>
                                                                      </div>
                                                                      <div class="modal-footer"><button class="btn btn-light mybtn" type="button" data-bs-dismiss="modal">Close</button><button class="btn btn-dark mybtn" type="button">Save</button></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="tab-pane" role="tabpanel" id="call-action-add">
                                                          <div class="settings-head">
                                                              <div class="settingsheading-child">
                                                                  <h2>Actions</h2>
                                                                  <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button" data-bs-target="#addaction" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                              <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                              <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                          </svg>Add Action</button></div>
                                                              </div>
                                                              <hr/>
                                                          </div>
                                                          <div class="settings-content">
                                                              <div class="settings-section">
                                                                  <div class="actions-big-div">
                                                                      <div class="actions-border"></div>
                                                                      <div class="action-box-div">
                                                                          <div class="actions-box"><label class="form-label action-type">Message</label>
                                                                              <div class="received-message">
                                                                                  <div class="messageaction-div">
                                                                                      <div class="message-action-image"></div>
                                                                                      <div class="message-action-content">
                                                                                          <p class="message-action-name">Lead Name</p>
                                                                                          <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                                                      </div>
                                                                                  </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                                              </div>
                                                                              <div class="reply-message"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrow-forward reply-icon">
                                                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                      <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1"></path>
                                                                                  </svg>
                                                                                  <div class="reply-message-content-div">
                                                                                      <div class="messageaction-div">
                                                                                          <div class="message-action-image"></div>
                                                                                          <div class="message-action-content">
                                                                                              <p class="message-action-name">Agent Name</p>
                                                                                              <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                                                          </div>
                                                                                      </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                          <div class="actions-box"><label class="form-label action-type">Phone Call</label>
                                                                              <div class="received-message">
                                                                                  <div class="phonecallaction-div">
                                                                                      <div class="message-action-content">
                                                                                          <p class="phonecallaction-number">+971 234 567 890</p>
                                                                                          <p class="message-action-message-content">Gravida bibendum leo, torquent tellus dolor. Ultricies netus orci maecenas libero ligula, primis sapien. Non taciti himenaeos varius, eleifend curabitur.</p>
                                                                                      </div>
                                                                                  </div><small class="form-text action-date-and-time"><span>16 January</span><span>15:45 GMT+3</span></small>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="tab-pane" role="tabpanel" id="other-action-add">
                                                          <p>Tab content.</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
  </main>
</div>

    </>
  )
}
