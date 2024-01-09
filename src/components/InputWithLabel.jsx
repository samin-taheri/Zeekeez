import React from 'react'

export default function InputWithLabel() {
  return (
    <div className="col">
        <label className="form-label">Company Name</label>
        <input
          className="form-control myinput"
          type="text"
          placeholder="Your Company Name"
          name="company-name"
        />
      </div>
  )
}
