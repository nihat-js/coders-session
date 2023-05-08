import { Stack,  } from "@mui/material";
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
          <h3 className="name">
            {location.name} , {location.country}
          </h3>
          <h3 className="time">
            {d.getHours()} : {d.getMinutes()}
          </h3>
        </div>
        <div className="right">
          <img src={current.condition.icon} width={"64px"} />
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
