import { useEffect, useState } from "react";
import { baseURL } from "../consts/consts";
import axios from "axios";
import Container from "@mui/material/Container";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCityInfo } from "../features/customFetch";
import SavedLocation from "../components/SavedLocation";
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

  const getAllSaved = async () => {
    let data = [];
    for (let x of savedLocations) {
      let response = await getCityInfo(x);
      data.push(response);
    }
    setSavedArr(data);
  };

  useEffect(() => {
    getAllSaved();
  }, []);

  const { savedLocations, latestSearchs } = useSelector((state) => state.main);
  const [savedArr, setSavedArr] = useState([]);
  const [latestArr, setLatestArr] = useState([]);

  // console.log("s",savedLocations,latestSearchs)

  const [val, setVal] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <Container maxWidth="sm"  style={{ background: "#5c07ab",color : "white", minHeight : "600px" ,  borderRadius :"8px" } }>
        <Stack

          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          py={4}
        >
          <p> Home </p>
          <p> ... </p>
        </Stack>
        <TextField  
          inputProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label="Search city,country or location"
          variant="outlined"
          fullWidth
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => (e.key == "Enter" ? navigate("/" + val) : "")}
        />
        <div className="saved-location">
          <Typography variant="h5" sx={{margin : "24px 0"}}> Saved Locations </Typography>
          {savedArr.map((i, j) => (
            <SavedLocation data={i} key={j} />
          ))}
        </div>
      </Container>
    </div>
  );
}
