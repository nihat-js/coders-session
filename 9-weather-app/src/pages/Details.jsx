import { useEffect, useState } from "react";
import { baseURL } from "../consts/consts";
import axios from "axios";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, Stack } from "@mui/material";
import { getCityInfo } from "../features/customFetch";
import HourOfDay from "../components/HourOfDay";
import {useDispatch, useSelector} from "react-redux"
import {addToSavedLocation, removeFromSavedLocation} from '../store/mainSlice'
export default function Details() {
  const [item, setItem] = useState({});
  const { city } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {savedLocations} = useSelector((state) => state.main )
  async function get() {
    let res = await getCityInfo(city);
    setItem(res);
  }

  

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="container-fluid">
      <Container
        maxWidth="sm"
        style={{
          background: "#1f1f42",
          color: "white",
          minHeight: "600px",
          borderRadius: "8px",
        }}
      >
        <Stack
          py={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          p={2}
        >
          <Link onClick={() => navigate("/")}> Back </Link>
          <p> ... </p>
        </Stack>
        {item && (
          <>
            <div style={{display:"flex",justifyContent:"center" ,}  }>
              <img src={item.current?.condition.icon} alt="" width={"128px"} />
              <p className="feels_like"> {item?.current?.feelslike_c} C </p>
            <p>  {item?.location?.name} , {item?.location?.country}   </p>
            
            {savedLocations.findIndex(x => x === city ) === -1 ?    <button onClick={ () => dispatch(addToSavedLocation(city))} > Save it  </button> :
             <button onClick={ () => dispatch(removeFromSavedLocation(city))} > Unsave it  </button> 
             }
           
    
            </div>
            <div className="group">
              <p className="humidity"> {item?.current?.humidity} </p>
              <p className="wind_kph"> {item?.current?.wind_kph} </p>
            </div>
            <Stack Stack flexDirection="row" gap={"10px"} >
              {item.forecast &&
                item.forecast.forecastday[0].hour
                  .slice(0, 5)
                  .map((i, j) => <HourOfDay data={i} key={j} />)}
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
}
