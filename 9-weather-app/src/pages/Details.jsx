import { useEffect, useState } from "react";
import { baseURL } from "../consts/consts";
import axios from "axios";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom"
import { Link, Stack } from "@mui/material";

export default function Details() {
  const [item, setItem] = useState({});
  const { city } = useParams();
  const navigate = useNavigate()
  console.log(city);
  const getBakuWeather = async () => {
    try {
      let response = await axios.get(baseURL + "&q=" + city);
      console.log("test", response);
      setItem(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBakuWeather();
  }, []);

  return (
    <div>
      <Container maxWidth="sm" style={{ background: "#f2f6fc" }}>
        <Stack
          py={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          p={2}
        >
          <Link onClick={()=> navigate("/") } > Back </Link>
          <p> ... </p>
        </Stack>
        {item && (
          <>
            <img src={item?.current?.condition.icon} alt="" width={"64px"} />
            <div className="feels_like"> {item?.current?.feels_like_c} </div>
            <p>
              {" "}
              {item?.location?.name} , {item?.location?.country}{" "}
            </p>
            <div className="group">
              <p className="humidity"> {item?.current?.humidity} </p>
              <p className="wind_kph"> {item?.current?.wind_kph} </p>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
