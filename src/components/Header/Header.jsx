import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Avatar,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [flexValue, setFlexValue] = useState("0 0 50%");

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1400) {
        setFlexValue("0 0 30%");
      } else if (screenWidth > 1100) {
        setFlexValue("0 0 35%");
      } else {
        setFlexValue("0 0 50%");
      }
    }

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Initial flex value based on current screen size
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "0 5px 5px -4px rgba(0, 0, 0, 0.2)", position: "relative" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 70%" }}>
          {/* First 50% of the width */}
        </div>
        <div style={{ display: "flex", alignItems: "center", flex: flexValue }}>
          <TextField
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "hsl(220deg 20% 97.06%)", color: "black" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ display: showClearIcon }}
                >
                  <ClearIcon />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ width: "5%" }}></div>
          <NotificationsIcon style={{ color: "hsl(210deg 33.33% 9.41%)" }} />
          <div style={{ width: "5%" }}></div>
          <Avatar>U</Avatar>
          <div style={{ width: "5%" }}></div>
          <ArrowDropDownIcon style={{ color: "hsl(210deg 33.33% 9.41%)" }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;