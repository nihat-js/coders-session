import { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useGetJobsQuery } from "../store/store";
import { useSelector } from "react-redux";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Index() {
  const selectedCategory = useSelector(
    (state: any) => state.main.selectedCategory
  );
  const [selectedJob, setSelectedJob] = useState();

  const { data, isLoading } = useGetJobsQuery();

  return (
    <main style={{ display: "grid", gridTemplateColumns: "2fr 4fr 5fr" }}>
      <SideBar />

      <div className="mid">
        <TextField id="standard-basic"  variant="standard" fullWidth={true} placeholder="Sayt üzrə axtarış"  />
        <List
          sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}
        >
          {!isLoading &&
            data
              ?.filter((x) => {
                if (selectedCategory == -1) {
                  return x;
                } else if (x.id == selectedCategory) {
                  return x;
                }
              })
              .map((i: any, j: number) => {
                return (
                  <ListItemButton
                    selected={selectedJob == i.id}
                    onClick={() => setSelectedJob(i.id)}
                  >
                    <ListItemAvatar>
                      <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={i.title} secondary={i.company} />
                    <ListItemText primary={i.publishDate} />
                    <div>
                      {/* <VisibilityIcon /> */}
                      <span> {i.views} </span>
                    </div>
                  </ListItemButton>
                );
              })}
        </List>
      </div>

      <div>
        {selectedJob && (
          <div>
            <h3 className="title">
              {" "}
              Job Title : {
                data?.filter((x) => x.id === selectedJob)[0].title
              }{" "}
            </h3>
            <h3 className="Deadline">
              {" "}
              Deadline : {
                data?.filter((x) => x.id === selectedJob)[0].deadline
              }{" "}
            </h3>
            <h3 className="Deadline">
              {" "}
              Views : {data?.filter((x) => x.id === selectedJob)[0].views}{" "}
            </h3>

            <div className="tabs">
              <span> About Job </span>
              <span> About Company </span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              veritatis.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Index;
