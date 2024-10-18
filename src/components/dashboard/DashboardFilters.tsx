import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MultipleSelectPlaceholder from "../ui/Select";

const DashboardFilters = () => {
  return (
    <div className="flex items-center gap-3 p-4 w-full bg-[]">
      <div className="bg-gray-200 p-2 rounded-lg">
        <SearchIcon className="text-gray-800 flex justify-center items-center" />
      </div>
      <div className="bg-gray-200 p-2 rounded-lg">
        <DateRangeIcon className="text-gray-800 flex justify-center items-center" />
      </div>
     
    </div>
  );
};

export default DashboardFilters;
