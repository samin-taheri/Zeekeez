import React from 'react'

export default function HorizontalTabs() {
  return (
    <>
    <div class="horizontal-tabs-mother">
                    <form>
                        <div class="horizontal-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-smart-home">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
                                            <path d="M16 15c-2.21 1.333-5.792 1.333-8 0"></path>
                                        </svg>My Property</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-photo">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="15" y1="8" x2="15.01" y2="8"></line>
                                            <rect x="4" y="4" width="16" height="16" rx="3"></rect>
                                            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
                                            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
                                        </svg>Images</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-file">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                        </svg>Documents</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane" role="tabpanel" id="tab-1">
                                    <div class="settings-head">
                                        <div class="settingsheading-child">
                                            <h2>My Property</h2>
                                            <div class="settingsheading-child-buttons-mother"><button class="btn btn-outline-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-send">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                                                    </svg>Publish on zeekeez</button><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                        <circle cx="12" cy="14" r="2"></circle>
                                                        <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                                    </svg>Save</button></div>
                                        </div>
                                    </div>
                                    <div class="settings-content">
                                        <div class="settings-section">
                                            <h3>Layout</h3>
                                            <div class="row gy-3 row-cols-1 row-cols-lg-2">
                                                <div class="col"><label class="form-label">Type*</label><select class="form-select myinput" name="type">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Transaction*</label><select class="form-select myinput" name="transaction">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Property Type*</label><select class="form-select myinput" name="propertytype">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Size*</label><select class="form-select myinput" name="size">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">No of Bathrooms*</label><select class="form-select myinput" name="nobathroom">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">No of Bedrooms*</label><select class="form-select myinput" name="nobedroom">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">No of Parking Spaces</label><select class="form-select myinput" name="noparkingspace">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Furnished Type</label><select class="form-select myinput" name="furnishedtype">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Property Developer</label><select class="form-select myinput" name="propertydeveloper">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"></div>
                                                <div class="col"><label class="form-label">Availability</label><select class="form-select myinput" name="availability">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">Available</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col"><label class="form-label">Available Form</label>
                                                <input class="form-control myinput" type="date" name="availableform"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="settings-section">
                                            <h3>Pricing</h3>
                                            <div class="row gy-3 row-cols-1 row-cols-lg-3">
                                                <div class="col"><label class="form-label">Price*</label><input class="form-control myinput" type="number" name="price"/></div>
                                                <div class="col"><label class="form-label">Cheques</label><select class="form-select myinput" name="cheques">
                                                        <optgroup label="This is a group">
                                                            <option value="12" selected="">This is item 1</option>
                                                            <option value="13">This is item 2</option>
                                                            <option value="14">This is item 3</option>
                                                        </optgroup>
                                                    </select></div>
                                                <div class="col d-grid align-items-end">
                                                    <div class="d-flex gap-2"><label class="switch">
  <input checked type="checkbox" name="priceonrequest"/>
  <span class="slider round"></span>
</label><label class="form-label mb-0 gilroybold">Price on Request</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" role="tabpanel" id="tab-2">
                                    <div class="settings-head">
                                        <div class="settingsheading-child">
                                            <h2>Images<span class="numberofheading">(9/10 images uploaded)</span></h2>
                                            <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                                        <circle cx="12" cy="14" r="2"></circle>
                                                        <polyline points="14 4 14 8 8 8 8 4"></polyline>
                                                    </svg>Save</button></div>
                                        </div>
                                        <div class="settings-head-footer"><button class="dashedbutton" type="button" data-bs-target="#dragdrop" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-photo">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="15" y1="8" x2="15.01" y2="8"></line>
                                                    <rect x="4" y="4" width="16" height="16" rx="3"></rect>
                                                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
                                                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
                                                </svg>Add Other Images</button>
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
                                            <div class="row gy-5">
                                                <div class="col-12 col-lg-4">
                                                    <div>
                                                        <p class="gilroybold">Preview default image</p>
                                                    </div>
                                                    <div class="default-image-preview" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);"></div>
                                                </div>
                                                <div class="col-12 col-lg-8">
                                                    <div>
                                                        <p class="gilroybold">Drag and drop to change position</p>
                                                    </div>
                                                    <div class="row gx-4 gy-4 row-cols-1 row-cols-lg-2 row-cols-xl-3">
                                                        <div class="col">
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"/><label class="form-check-label" for="formCheck-1"></label></div>
                                                                    </div>
                                                                </div>
                                                                <div class="select-type-mother">
                                                                    <div class="dropdown myinputdropdownmother"><button class="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button">Default Image<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down ms-2">
                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                                            </svg></button>
                                                                        <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"/><label class="form-check-label" for="formCheck-3"></label></div>
                                                                    </div>
                                                                </div>
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
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"/><label class="form-check-label" for="formCheck-2"></label></div>
                                                                    </div>
                                                                </div>
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
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"/><label class="form-check-label" for="formCheck-6"></label></div>
                                                                    </div>
                                                                </div>
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
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"/><label class="form-check-label" for="formCheck-5"></label></div>
                                                                    </div>
                                                                </div>
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
                                                            <div class="documentcard">
                                                                <div>
                                                                    <div class="docicondiv" style="background-image: url(&quot;assets/img/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg&quot;);">
                                                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"/><label class="form-check-label" for="formCheck-4"></label></div>
                                                                    </div>
                                                                </div>
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
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane active" role="tabpanel" id="tab-3">
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
                    </form>
                </div>
    </>
  )
}
