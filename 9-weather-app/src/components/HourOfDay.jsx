import { Stack } from '@mui/material'
import React from 'react'

export default function HourOfDay(props) {
  const t= new Date(props.data.time)
  return (
    <Stack flexDirection={"column"} alignItems={"center"} padding={"6px 8px "}  sx={{ backgroundColor:"#9221DE" , cursor : "pointer" , borderRadius : "6px" ,  "&:hover "  : { opacity : .6 } }}  >
      <p className="time"> {t.getHours().toString().padStart(2, "0") } : {  t.getMinutes().toString().padStart(2, "0")  } </p>
      <img src={props.data.condition.icon} alt="" />
      <h3 className='temperature'> {props.data.temp_c}C </h3>
    </Stack>
  )
}
