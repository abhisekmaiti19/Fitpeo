import React from 'react'

export default function Profile({imgsrc,proname,designation}) {
 
  return (
    <div id="profile">
    <img
      src={`${imgsrc}`}
      alt=""
    />
    <div id="details">
      <span id="proname">{proname}</span>
      <span>{designation}</span>
    </div>
    <i class="fi fi-rr-angle-small-down"></i>
  </div>
  )
}
