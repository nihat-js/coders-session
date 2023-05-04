import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {useSelector} from "react-redux"
import logoSvg from "../assets/logo.svg"
export default function SideBar() {
  const navigate = useNavigate()

  const selectedCategory = useSelector( (state : any)  => state.main.selectedCategory )



  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <div> <img src={logoSvg} />  </div>
      <ListItemButton sx={{ bgcolor: window.location.pathname == "/" ? '#0c4dde' :  null , borderRadius : "4px" , hover : "opacity : .5"  }}   onClick={() => navigate("/")}  >
        <ListItemText primary={"Elanlar"} />
      </ListItemButton>

      <ListItemButton   sx={{ bgcolor: window.location.pathname == "/categories" ? '#0c4dde' :  null , borderRadius : "4px"    }}   onClick={() => navigate("/categories")} >
        <ListItemText primary={"Kategoriyalar"}/>
      </ListItemButton>

      <ListItemButton     >
        <ListItemText primary={"Sənayə"}/>
      </ListItemButton>

      <ListItemButton     >
        <ListItemText primary={"Şirkətlər"}/>
      </ListItemButton>

      <p> Sizin JobSearch </p>

      <ListItemButton     >
        <ListItemText primary={"Seçilmiş elanlar"}/>
      </ListItemButton>
      <ListItemButton     >
        <ListItemText primary={"Abunə kateqoriyalar"}/>
      </ListItemButton>

    </List>
  )
}