import { useEffect, useState } from "react";
import { baseURL } from "../consts/consts";
import axios from "axios";
import Container from "@mui/material/Container";
import { Grid, Stack, TextField } from "@mui/material";
import {useNavigate } from "react-router-dom"
import {  useSelector } from "react-redux"
export default function Index() {
  const [item, setItem] = useState({});

  const getBakuWeather = async () => {
    try {
      let response = await axios.get(baseURL);
      console.log("test", response);
      setItem(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const {savedLocations,latestSearchs} =  useSelector((state)=> state.main )

  // console.log("s",savedLocations,latestSearchs)

  const [val,setVal] = useState("")
  const navigate = useNavigate()
  return (
    <div>
      <Container maxWidth="sm" style={{ background: "#f2f6fc" }}>
        <Stack py={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          p={2}
        >
          <p> Search </p>
          <p> ... </p>
        </Stack>
        <TextField
          id="outlined-basic"
          label="Search city,country or location"
          variant="outlined" fullWidth
          onChange={(e)=> setVal(e.target.value)  } 
          onKeyDown={(e) => e.key == "Enter" ? navigate("/"+val) : ""  }
        />
        <div className="saved-location">
          <h3> Saved Locations </h3>
          <div className="item">
            <div className="left">
              <h3 className="name"> Baku </h3>
            </div>
            <div className="right">
              <p className="feels-like"> -3 </p>
              <p className="high-and-low"> H : 3 L:-4 </p>
            </div>
          </div>
        </div>
        <div className="latest-searchs">
          <h3> Latest Searchs </h3>
          <div className="item">
            <div className="left">
              <h3 className="name"> Baku </h3>
            </div>
            <div className="right">
              <p className="feels-like"> -3 </p>
              <p className="high-and-low"> H : 3 L:-4 </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
