import { Stack } from '@mui/material'
import React from 'react'

export default function HourOfDay(props) {
  const t= new Date(props.data.time)
  console.log("mmm",props.data)
  return (
    <div  style={{ backgroundColor:"#26314B" ,hover : "background-color : #261021" }}  >
      <p className="time"> {t.getHours()} : {t.getMinutes()} </p>
      <img src={props.data.condition.icon} alt="" />
      <h3 className='temperature'> {props.data.temp_c}C </h3>
    </div>
  )
}
