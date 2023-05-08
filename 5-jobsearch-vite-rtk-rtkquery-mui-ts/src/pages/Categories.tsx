import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {  useGetCategoriesQuery,  useGetJobsQuery,} from "../store/apiSlice";
import { setSelectedCategory } from "../store/mainSlice";
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Categories() {
  const dispatch = useDispatch();
  const  selectedCategory  = useSelector((state: any) => state.main.selectedCategory );
  const { data,  isLoading } = useGetCategoriesQuery();
  
  console.log(data);

  console.log(selectedCategory)
  return (
    <main style={{ display: "grid", gridTemplateColumns: "2fr 4fr 5fr" }}>
      <SideBar />

      <List sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
        <ListItemButton
          selected={selectedCategory == -1 }
          onClick={() => dispatch(setSelectedCategory(-1))}
        >
          <ListItemText primary={"All"} secondary={"Select All"} />
        </ListItemButton>
        {!isLoading &&
          data?.map((i: any, j: number) => {
            return (
              <ListItemButton
                key={j}
                selected={selectedCategory == i.id}
                onClick={() => dispatch(setSelectedCategory(i.id))}
              >
                <ListItemText primary={i.name} secondary={i.count +" iş elanı"} />
              </ListItemButton>
            );
          })}
      </List>
    </main>
  );
}

export default Categories;
