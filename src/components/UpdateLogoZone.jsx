import React from 'react'

export default function UpdateLogoZone() {
    return (
    <div className="logo-image-preview">
        <div id="profile-image-preview" chtml2relass="image-upload-area" />
        <p><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-photo">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={15} y1={8} x2="15.01" y2={8} />
            <rect x={4} y={4} width={16} height={16} rx={3} />
            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /></svg>Add Logo
        </p>
        <input className="form-control" type="file" id="profile-image-input" /></div>
        )
}
