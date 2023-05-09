import { Stack, Typography,  } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function SavedLocation(props) {
  const { current, forecast, location } = props.data;
  let d = new Date(location.localtime);


  return (
    <Link to={"/" + location.name}  color="" >
      <Stack sx={{":hover" : {backgroundColor : 'teal'  } }}
        className="item"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        px={4}
        py={1}
      >
        <div className="left">
          <Typography variant="h5" className="name">
            {location.name} , {location.country}
          </Typography>
          <Typography variant="h6" className="time">
            {d.getHours().toString().padStart(2, "0") } : {d.getMinutes().toString().padStart(2, "0")  }
          </Typography>
        </div>
        <div className="right">
          <img src={current.condition.icon} width={"36px"} />
          <p className="feels-like"> Feels Like : {current.feelslike_c} </p>
          <p className="high-and-low">
            {" "}
            H : {forecast.forecastday[0].day.maxtemp_c}, L:{" "}
            {forecast.forecastday[0].day.mintemp_c}{" "}
          </p>
        </div>
      </Stack>
    </Link>
  );
}
