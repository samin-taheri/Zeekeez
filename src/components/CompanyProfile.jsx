import React from 'react'

export default function CompanyProfile(props) {
  return (
    <>
    <div>
        <main class="mainformobile" data-component="main">                
                <div class="horizontal-tabs-mother">
                    <form>
                        <div class="horizontal-tabs">
                            <ul class="nav nav-tabs" role="tablist" data-component="tab-items">
                                <li class="nav-item" role="presentation" data-component="tab-item"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="/company/profile"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-building-skyscraper">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="3" y1="21" x2="21" y2="21"></line>
                                            <path d="M5 21v-14l8 -4v18"></path>
                                            <path d="M19 21v-10l-6 -4"></path>
                                            <line x1="9" y1="9" x2="9" y2="9.01"></line>
                                            <line x1="9" y1="12" x2="9" y2="12.01"></line>
                                            <line x1="9" y1="15" x2="9" y2="15.01"></line>
                                            <line x1="9" y1="18" x2="9" y2="18.01"></line>
                                        </svg>Profile</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/company/profile/watermark"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-float-center">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <rect width="6" height="6" x="9" y="5" rx="1"></rect>
                                            <line x1="4" y1="7" x2="5" y2="7"></line>
                                            <line x1="4" y1="11" x2="5" y2="11"></line>
                                            <line x1="19" y1="7" x2="20" y2="7"></line>
                                            <line x1="19" y1="11" x2="20" y2="11"></line>
                                            <line x1="4" y1="15" x2="20" y2="15"></line>
                                            <line x1="4" y1="19" x2="20" y2="19"></line>
                                        </svg>Watermark</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/company/profile/accesscontrol"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-shield-lock">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
                                            <circle cx="12" cy="11" r="1"></circle>
                                            <line x1="12" y1="12" x2="12" y2="14.5"></line>
                                        </svg>Access Control</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="/company/profile/billing"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-wallet">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                                        </svg>Billing</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" role="tabpanel" id="tab-1">
                                    <div class="settings-head" data-component="settings-header">
                                        <div class="settingsheading-child">
                                            <h2>{props.name}</h2>
                                            <div class="settingsheading-child-buttons-mother" data-component="settings-header-buttons-mother"><button class="btn btn-dark mybtn" type="button" data-component="button-with-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
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
                                            <div class="row gy-5">
                                                <div class="col-12 col-lg-4">
                                                    <div class="logo-image-preview" data-component="add-logo-zone">
                                                        <div id="profile-image-preview" class="image-upload-area"></div>
                                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-photo">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <line x1="15" y1="8" x2="15.01" y2="8"></line>
                                                                <rect x="4" y="4" width="16" height="16" rx="3"></rect>
                                                                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
                                                                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
                                                            </svg>Add Logo</p><input class="form-control" type="file" id="profile-image-input"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-8">
                                                    <div class="mb-5">
                                                        <h3>Information</h3>
                                                        <div class="row gy-3 row-cols-1 row-cols-lg-2">
                                                            <div class="col" data-component="input-with-label"><label class="form-label">Company Name*</label><input class="form-control myinput" type="text" placeholder="Your Company Name" name="company-name" data-component="text-input"/></div>
                                                            <div class="col"><label class="form-label">Last Name*</label><input class="form-control myinput" type="text" placeholder="Your Last Name" name="company-lastname"/></div>
                                                            <div class="col"><label class="form-label">Phone*</label><input class="form-control myinput" type="tel" placeholder="000" name="company-phone"/></div>
                                                            <div class="col"><label class="form-label">Mobile</label><input class="form-control myinput" type="tel" placeholder="000" name="company-mobile"/></div>
                                                            <div class="col"><label class="form-label">Email*</label><input class="form-control myinput" type="email" placeholder="your@email.com" name="company-email"/></div>
                                                            <div class="col"><label class="form-label">License Number*</label><input class="form-control myinput" type="number" placeholder="0000000" name="company-licensenumber"/></div>
                                                        </div>
                                                    </div>
                                                    <div class="settings-section">
                                                        <h3>Address</h3>
                                                        <div class="row gy-3">
                                                            <div class="col-12"><label class="form-label">Address</label><textarea class="form-control myinput" rows="5" name="company-address"></textarea></div>
                                                            <div class="col-12 col-lg-6"><label class="form-label">Country</label><select class="form-select myinput" name="company-country" data-component="select-input">
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
                                            <h2>Watermark</h2>
                                            <div class="settingsheading-child-buttons-mother"><button class="btn btn-outline-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-check">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>Apply Watermark On All Images</button><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
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
                                            <div class="row gy-5 gy-lg-0">
                                                <div class="col-12 col-lg-4">
                                                    <div>
                                                        <div class="d-flex flex-column gap-2"><label class="form-label gilroybold mb-0">Position</label><select class="form-select myinput">
                                                                <optgroup label="This is a group">
                                                                    <option value="12" selected="">Middle Center</option>
                                                                    <option value="13">This is item 2</option>
                                                                    <option value="14">This is item 3</option>
                                                                </optgroup>
                                                            </select>
                                                            <div id="upload-watermark-div" class="watermark-logo-div">
                                                                <div id="watermark-image-preview" class="image-upload-area"></div><input class="form-control hiddenfile-input" type="file" id="watermark-image-input"/>
                                                                <p class="photo-upload-paragraph">Upload Your Logo</p>
                                                            </div>
                                                            <div><label class="form-label gilroybold mb-0">Opacity</label><input class="form-range form-control" type="range" id="opacity-range" min="0" max="100"/><span id="opacity-value" class="form-text">50</span><span class="form-text">%</span></div>
                                                            <div><label class="form-label gilroybold mb-0">Size</label><input class="form-range form-control" type="range" id="size-range" min="0" max="100"/><span id="size-value" class="form-text">50</span><span class="form-text">%</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-8">
                                                    <div class="watermark-preview"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" role="tabpanel" id="tab-3">
                                    <div class="settings-head">
                                        <div class="settingsheading-child">
                                            <h2>Access Control</h2>
                                            <div class="settingsheading-child-buttons-mother"><button class="btn btn-outline-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-plus">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>Create a New Role</button><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-device-floppy">
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
                                            <div class="halfondesktop mb-5"><label class="form-label gilroybold">Role</label><select class="form-select myinput">
                                                    <optgroup label="This is a group">
                                                        <option value="12" selected="">Admin</option>
                                                        <option value="13">This is item 2</option>
                                                        <option value="14">This is item 3</option>
                                                    </optgroup>
                                                </select><small class="form-text">Please select a role</small></div>
                                            <div class="halfondesktop check-with-icon-section"><label class="form-label gilroybold">User's Properties</label>
                                                <div class="checks-withicons-mother">
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-11"/><label class="form-check-label" for="formCheck-11"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"></path>
                                                                </svg></span>View</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-12"/><label class="form-check-label" for="formCheck-12"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"></path>
                                                                </svg></span>Edit</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-13" checked=""/><label class="form-check-label" for="formCheck-13"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                                                                </svg></span>Approve</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-14" checked=""/><label class="form-check-label" for="formCheck-14"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z"></path>
                                                                </svg></span>Select Portal</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-15" checked=""/><label class="form-check-label" for="formCheck-15"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path>
                                                                </svg></span>Delete</label></div>
                                                </div>
                                            </div>
                                            <div class="halfondesktop check-with-icon-section"><label class="form-label gilroybold">User's Properties</label>
                                                <div class="checks-withicons-mother">
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-1"/><label class="form-check-label" for="formCheck-1"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"></path>
                                                                </svg></span>View</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-2"/><label class="form-check-label" for="formCheck-2"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"></path>
                                                                </svg></span>Edit</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-3" checked=""/><label class="form-check-label" for="formCheck-3"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                                                                </svg></span>Approve</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-4" checked=""/><label class="form-check-label" for="formCheck-4"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z"></path>
                                                                </svg></span>Select Portal</label></div>
                                                    <div class="form-check boxed-check"><input class="form-check-input" type="checkbox" id="formCheck-5" checked=""/><label class="form-check-label" for="formCheck-5"><span class="check-box-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                                                    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path>
                                                                </svg></span>Delete</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" role="tabpanel" id="tab-4">
                                    <div class="settings-head">
                                        <div class="settingsheading-child">
                                            <h2>Billing</h2>
                                            <div class="settingsheading-child-buttons-mother"><button class="btn btn-dark mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevrons-up">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <polyline points="7 11 12 6 17 11"></polyline>
                                                        <polyline points="7 17 12 12 17 17"></polyline>
                                                    </svg>Upgrade</button></div>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div class="settings-content">
                                        <div class="settings-section">
                                            <h3>Starter Pack</h3>
                                            <div class="billing-card">
                                                <div class="d-flex gap-2">
                                                    <h5 class="gilroybold d-inline-flex pe-2 mb-0 align-items-center">Properties</h5>
                                                    <h5 class="text-primary gilroybold d-inline-flex mb-0 align-items-center">150 Available</h5>
                                                    <div class="vertical-hr"></div>
                                                    <h5 class="text-danger gilroybold d-inline-flex mb-0 align-items-center">89 Properties Created</h5>
                                                </div>
                                                <hr/>
                                                <div>
                                                    <p class="mb-4">Your annual subscription will automaticlly renew on <span class="gilroybold">11 Dec 2020</span></p>
                                                </div><button class="btn btn-dark rounded-pill mybtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-x">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>Cancel Subscription</button>
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
        </main>
    </div>

    </>
  )
}
