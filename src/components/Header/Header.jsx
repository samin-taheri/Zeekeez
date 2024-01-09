import React from 'react'
import Menu from './NestedComponents/Menu'
import Navbar from './NestedComponents/Navbar'

export default function Header() {
  return (
    <>
    <header>
      <Navbar />
      <Menu/>
      
      <div id="mymenu-bg" className="mymenubg" />
      
      <div className="modal fade logregmodal" role="dialog" tabIndex={-1} id="join">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Join to Zeekeez!</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3"><label className="form-label">First Name</label><input className="form-control myinput" type="text" placeholder="John" /></div>
                <div className="mb-3"><label className="form-label">Last Name</label><input className="form-control myinput" type="text" placeholder="Doe" /></div>
                <div className="mb-3"><label className="form-label">Email</label><input className="form-control myinput" type="email" placeholder="john@doe.com" /></div>
                <div className="mb-1"><label className="form-label">Password</label><input className="form-control myinput" type="password" placeholder="Create Password" /><small className="form-text">At least 8 characters<br />At least 1 lowercase letter and 1 uppercase letter<br />At least 1 special character<br />Mix of letters and numbers<br /></small></div>
                <div className="mb-3"><input className="form-control myinput" type="password" placeholder="Confirm password" /></div>
                <div className="ps-2 mb-2">
                  <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-27" /><label className="form-check-label" htmlFor="formCheck-27">I read and accept the <a className="link-dark gilroybold" href="#">Terms and C<span style={{color: 'rgb(33, 37, 41)'}}>onditions</span></a>.</label></div>
                </div><button className="btn btn-dark w-100 mybtn" type="button">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade logregmodal" role="dialog" tabIndex={-1} id="login">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Welcome to Zeekeez!</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3"><label className="form-label d-xl-none">Don't you have an account?<br /><a className="text-decoration-none gilroybold text-dark" href="#" data-bs-target="#join" data-bs-toggle="modal">Create now with click here!</a></label></div>
                <div className="mb-3"><label className="form-label">Email</label><input className="form-control myinput" type="email" placeholder="john@doe.com" /></div>
                <div className="mb-3"><label className="form-label">Password</label><input className="form-control myinput" type="password" placeholder="Enter Your Password" /></div>
                <div className="ps-2 mb-3">
                  <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-28" /><label className="form-check-label" htmlFor="formCheck-28">Remember me</label></div>
                </div><button className="btn btn-dark w-100 mybtn mb-2" type="button">Sign in</button>
                <div className="mb-4"><a className="w-100 small text-center d-block text-decoration-none text-dark" href="#">I forgot my password</a></div>
                <div className="mb-4 position-relative">
                  <hr /><span className="orspan">Or</span>
                </div>
                <div className="mb-2 position-relative"><button className="btn btn-outline-dark w-100 mybtn" type="button">Login With <span className="gilroybold">Google</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 0 512 512" width="1em" height="1em" fill="currentColor" className="loginsocialicon">
                      {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg></button></div>
                <div className="position-relative"><button className="btn btn-outline-dark w-100 mybtn" type="button">Login With <span className="gilroybold">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="-96 0 512 512" width="1em" height="1em" fill="currentColor" className="loginsocialicon">
                      {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg></button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
