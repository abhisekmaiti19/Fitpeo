import React from 'react'

export default function Item(icon) {
 
  return (
    <div id="item" className={`${icon.data[3]}`}>
    <i className={`com ${icon.data[0]}`}><span>{icon.data[2]}</span></i>
    <i className={!icon.data[1]==='yes'?"fi fi-rr-angle-small-right":""}></i>
  </div>
  )
}
