import React from 'react'
import Item from './sidebar/Item';
import Logo from './sidebar/Logo'
import Profile from './sidebar/Profile'
import "../App.css";

export default function Sidebar() {
  const icons = {
    home:"fi fi-rr-house-chimney",
    product: "fi fi-rr-box-open-full com",
    customers : "fi fi-rr-comment-user com",
    income: "fi fi-rr-wallet com",
    help:"fi fi-rr-info com"


  }
  return (
    <section id="sidebar">
      <div id="up">
        <Logo/>
        <div id="items">
          <Item data={[icons.home,"no","Home","active"]} />
          <Item data={[icons.product,"yes","Products",""]} />
          <Item data={[icons.customers,"yes","Customers",""]} />
          <Item data={[icons.income,"yes","Income",""]} />
          <Item data={[icons.help,"yes","Help",""]} />   
        </div>
      
      </div>
      <div id="down">
      
        <Profile  
        imgsrc="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"  
        proname="Evano" 
        designation="Project Manager"/>
       
      </div>
    </section>
  )
}
