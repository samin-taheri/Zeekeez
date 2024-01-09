import React from 'react'

export default function Breadcrumb() {
  return (
    <div>
    <div className="breadcrumbdiv ps-0 withbacklink ps-3 mb-4">
          <ol className="breadcrumb mb-md-0">
            <li class="breadcrumb-item"><a href="/"><span>Dashboard</span></a></li>
            <li class="breadcrumb-item"><a href="/property/list"><span>Properties</span></a></li>
            {/*
            <li class="breadcrumb-item"><a href="/property/create"><span>New Property</span></a></li>
            <li class="breadcrumb-item"><a href="/leads/list"><span>Leads</span></a></li>
            <li class="breadcrumb-item"><a href="/leads/create/personalinformation"><span>New Leads</span></a></li>
            <li class="breadcrumb-item"><a href="/company/profile"><span>Company Profile</span></a></li>
  */}
          </ol>
        </div>
    </div>
  )
}
