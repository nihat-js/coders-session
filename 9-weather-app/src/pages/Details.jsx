import { useEffect, useState } from "react";
import { baseURL } from "../consts/consts";
import axios from "axios";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { getCityInfo } from "../features/customFetch";
import HourOfDay from "../components/HourOfDay";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSavedLocation,
  removeFromSavedLocation,
} from "../store/mainSlice";
import saveSvg from "../assets/save.svg";
import savedSvg from "../assets/saved.svg";
import humiditySvg from "../assets/humidity.svg";
import windSvg from "../assets/wind.svg";
import pressureSvg from "../assets/pressure.svg";
export default function Details() {
  const [item, setItem] = useState({});
  const { city } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { savedLocations } = useSelector((state) => state.main);
  async function get() {
    let res = await getCityInfo(city);
    // console.log("gett",res)
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
          background: "#5c07ab",
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
          <Link sx={{textDecoration : "none"}} onClick={() => navigate("/")}> Back </Link>
          {savedLocations.findIndex((x) => x === city) === -1 ? (
                  <img
                    onClick={() => dispatch(addToSavedLocation(city))}
                    src={saveSvg}
                    width={"36px"}
                  />
                ) : (
                  <img
                    src={savedSvg}
                    onClick={() => dispatch(removeFromSavedLocation(city))}
                    width={"36px"}
                  />
                )}
        </Stack>
        {item && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <img src={item.current?.condition.icon} alt="" width={"128px"} />
              <Typography variant="h2" mb={2} className="feels_like">
                {" "}
                {item?.current?.feelslike_c} C{" "}
              </Typography>
              <div style={{ display: "flex" }}>
                <p>
                  {" "}
                  {item?.location?.name} , {item?.location?.country}{" "}
                </p>

               
              </div>
            </div>
            <div
              className="group"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                margin: "30px 0",
              }}
            >
              <Stack
                sx={{  padding : "4px 8px" , "&:hover": { backgroundColor: "teal" } }}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"10px"}
              >
                {" "}
                <img src={humiditySvg} alt="" width={"24px"} />{" "}
                {item?.current?.humidity}{" "}
              </Stack>
              <Stack     sx={{  padding : "4px 8px" , "&:hover": { backgroundColor: "teal" } }} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                {" "}
                <img src={windSvg} width={"24px"} /> {item?.current?.wind_kph}{" "}
              </Stack>
              <Stack   sx={{  padding : "4px 8px" , "&:hover": { backgroundColor: "teal" } }} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                {" "}
                <img src={pressureSvg} width={"24px"} />{" "}
                {item?.current?.pressure_in}{" "}
              </Stack>
            </div>
            <Stack Stack flexDirection="row" gap={"10px"}  >
              {item.forecast &&
                item.forecast.forecastday[0].hour
                  .slice(0, 6)
                  .map((i, j) => <HourOfDay data={i} key={j} />)}
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
}
