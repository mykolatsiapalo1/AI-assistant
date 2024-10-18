import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MonitorIcon from "@mui/icons-material/Monitor";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

const Sidebar = () => {
  return (
    <div className=" max-h-[100%] h-full bg-white rounded-lg w-60 flex flex-col gap-2  p-3 ">
      <div className="flex flex-col gap-3">
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <PeopleAltIcon />
        </IconButton>
        <IconButton>
          <AccountTreeIcon />
        </IconButton>
        <IconButton>
          <MonitorIcon />
        </IconButton>
        <IconButton>
          <CollectionsBookmarkIcon />
        </IconButton>
        <IconButton>
          <ViewInArIcon />
        </IconButton>
        <IconButton>
          <EventRepeatIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
