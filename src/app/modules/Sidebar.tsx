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
    <div className="w-full h-20  bg-white rounded-lg  flex flex-col gap-2 p-3 md:max-h-[100%] md:h-full md:w-20">
      <div className="flex flex-row md:flex-col gap-3 overflow-x-auto">
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
