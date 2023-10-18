import React from 'react'
import "../App.css";

export default function Sidebar() {
  return (
    <section id="sidebar">
      <div id="up">
       
        <div id="logo">
          <i class="fi fi-rr-house-chimney-crack com">Dashboard</i>
        </div>
       
        <div id="items">
         
          <div id="item" class="active">
            <i class="fi fi-rr-house-chimney com"><span>Home</span></i>
            <i></i>
          </div>
          

          <div id="item">
            <i class="fi fi-rr-box-open-full com"><span>Product</span></i>
            <i class="fi fi-rr-angle-small-right"></i>
          </div>
          <div id="item">
            <i class="fi fi-rr-comment-user com"><span>Customers</span></i>
            <i class="fi fi-rr-angle-small-right"></i>
          </div>
          <div id="item">
            <i class="fi fi-rr-wallet com"><span>Income</span></i>
            <i class="fi fi-rr-angle-small-right"></i>
          </div>
          <div id="item">
            <i class="fi fi-rr-info com"><span>Help</span></i>
            <i class="fi fi-rr-angle-small-right"></i>
          </div>
        </div>
      
      </div>
      <div id="down">
      
        <div id="profile">
          <img
            src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"
            alt=""
          />
          <div id="details">
            <span id="proname">Evano</span>
            <span>Project Manager</span>
          </div>
          <i class="fi fi-rr-angle-small-down"></i>
        </div>
       
      </div>
    </section>
  )
}
