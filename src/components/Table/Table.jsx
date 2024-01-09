import React from 'react'

export default function Table() {
    return (
        <>
            <div className="row gy-5 gy-lg-0">
                <div className="col-md-2 position-relative">
                    <div className="filtercard-motherdiv">
                        <form>
                            <div className="mybox p-3 filtercard">
                                <h4 className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-filter-left me-2 mb-1">
                                    <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>Filter</h4>
                                <div>
                                    <div className="filtrelekisim">
                                        <div id="tshirtaccordion" className="accordion" role="tablist">
                                            <div>
                                                <h1 role="tab"><button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tshirtaccordion .tshirtaccordion"><span>Type</span></button></h1>
                                                <div className="accordion-collapse collapsed tshirtaccordion" role="tabpanel" data-bs-parent="tshirtaccordion">
                                                    <div className="filtrelekisim">
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">Rent<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">Sale<span className="text-muted filter-number">(50)</span></label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="ceketaccordion" className="accordion" role="tablist">
                                            <div>
                                                <h1 role="tab"><button className="collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#ceketaccordion .ceketaccordion"><span>Category</span></button></h1>
                                                <div className="accordion-collapse collapse ceketaccordion" role="tabpanel" data-bs-parent="ceketaccordion">
                                                    <div className="filtrelekisim">
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">Apartment<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">Villa<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Office<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">Penthouse<span className="text-muted filter-number">(50)</span></label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="price-accordion" className="accordion" role="tablist">
                                            <div>
                                                <h1 role="tab"><button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#price-accordion .price-accordion"><span>Price</span></button></h1>
                                                <div className="accordion-collapse collapse price-accordion" role="tabpanel" data-bs-parent="price-accordion">
                                                    <div className="pricerangediv"><label className="form-label text-center d-block mb-3">Price Range</label>
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
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder={0} /></div>
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder="Any" /></div>
                                                            </div>
                                                            <div id="filterbuttons" className="d-flex gap-1 filterbuttons">
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="other-accordion" className="accordion" role="tablist">
                                            <div>
                                                <h1 role="tab"><button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#other-accordion .other-accordion"><span>Other</span></button></h1>
                                                <div className="accordion-collapse collapse other-accordion" role="tabpanel" data-bs-parent="other-accordion">
                                                    <div className="filtrelekisim">
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">Apartment<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">Villa<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">Office<span className="text-muted filter-number">(50)</span></label></div>
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-10" /><label className="form-check-label" htmlFor="formCheck-10">Penthouse<span className="text-muted filter-number">(50)</span></label></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="mybox p-3">
                        <div className="propertyhead-div">
                            <h2><span className="numberofproperties">10</span>Owners</h2>
                            <div><button className="btn btn-dark mybtn d-flex align-items-center" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-plus-circle me-3">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>Add Lead</button></div>
                        </div>
                        <div>
                            <form>
                                <div className="propertiestable">
                                    <div className="flex-table">
                                        <div className="flex-table-cl"><input type="checkbox" className="form-check-input m-0 proptable-checkbox" /><span className="select-listing-span">Select this listing</span></div>
                                        <div className="flex-table-cl">
                                            <div className="position-relative"><input className="form-control myformcontrol" type="search" /><button className="searchicon-btn small-icn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg></button></div><label className="form-label gilroybold table-hd-label">Name</label>
                                        </div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                <div className="dropdown-menu">
                                                    <div><label className="form-label mainlabel">Bedrooms</label>
                                                        <div className="radiolist monolabel">
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-133" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-133">Studio</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-134" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-134">1</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-135" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-135">2</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-136" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-136">3</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-137" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-137">4</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-138" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-138">5</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-139" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-139">6</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-140" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-140">7</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-141" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-141">8+</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><label className="form-label gilroybold table-hd-label">Status</label>
                                        </div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                <div className="dropdown-menu">
                                                    <div><label className="form-label mainlabel">Bedrooms</label>
                                                        <div className="radiolist monolabel">
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-142" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-142">Studio</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-143" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-143">1</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-144" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-144">2</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-145" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-145">3</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-146" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-146">4</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-147" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-147">5</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-148" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-148">6</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-149" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-149">7</label></div>
                                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-150" name="bedroom" /><label className="form-check-label" htmlFor="formCheck-150">8+</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><label className="form-label gilroybold table-hd-label">Type</label>
                                        </div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                <div className="dropdown-menu">
                                                    <div className="pricerangediv"><label className="form-label text-center d-block mb-3">Price Range</label>
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
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder={0} /></div>
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder="Any" /></div>
                                                            </div>
                                                            <div id="filterbuttons-1" className="d-flex gap-1 filterbuttons">
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><label className="form-label gilroybold table-hd-label">Budget</label>
                                        </div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="btn btn-light dropdown-toggle myinput myinputdropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button">&nbsp;Any&nbsp;</button>
                                                <div className="dropdown-menu">
                                                    <div className="pricerangediv"><label className="form-label text-center d-block mb-3">Price Range</label>
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
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder={0} /></div>
                                                                <div className="w-100 rangeleftrighttdiv"><input className="form-control" type="number" placeholder="Any" /></div>
                                                            </div>
                                                            <div id="filterbuttons-2" className="d-flex gap-1 filterbuttons">
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                                <div className="rangeleftrighttdiv makeitscrollable"><button className="rangefilterbtn" type="button">0</button><button className="rangefilterbtn" type="button">1000</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button><button className="rangefilterbtn" type="button">Button</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><label className="form-label gilroybold table-hd-label">Assigned To</label>
                                        </div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-three-dots-vertical">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg></button>
                                                <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-table">
                                        <div className="flex-table-cl"><input type="checkbox" className="form-check-input m-0 proptable-checkbox" /><span className="select-listing-span">Select this listing</span></div>
                                        <div className="flex-table-cl"><span className="table-col-mobile-title">Name</span><span>John Doe</span></div>
                                        <div className="flex-table-cl"><span className="table-col-mobile-title">Email</span><span><span className="status-name"><span className="status-dot blue" />Prospect</span></span></div>
                                        <div className="flex-table-cl"><span className="table-col-mobile-title">Phone</span><span>+971 123 456 789</span></div>
                                        <div className="flex-table-cl"><span className="table-col-mobile-title">Assigned To</span><span>Another John D.</span></div>
                                        <div className="flex-table-cl"><span className="table-col-mobile-title">Assigned To</span><span>Another John D.</span></div>
                                        <div className="flex-table-cl">
                                            <div className="dropdown myinputdropdownmother"><button className="dropdown-toggle propdrop" aria-expanded="false" data-bs-toggle="dropdown" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-three-dots-vertical">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg></button>
                                                <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
