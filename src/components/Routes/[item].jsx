// Item.js
import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, MenuItem, Button, Select, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, Input } from "@mui/material";
import Chart from "../Charts/Charts";
import "./item.css";
import SingleBar from "../Charts/SingleBar";
import DoubleBar from "../Charts/DoubleBar";

const Item = (props) => {
  const [selectedOption1, setSelectedOption1] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState("january");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Sample data for dropdown options
  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options2 = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
  ];

  // Function to handle data change based on selected options
  const handleDataChange = () => {
    // Use selected options to generate or fetch data dynamically
    // For simplicity, let's generate some random data here
    const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

    // Pass the new data to the Chart component
    return newData;
  };

  const handleDataChange2 = () => {
    // Use selected options to generate or fetch data dynamically
    // For simplicity, let's generate some random data here
    const newData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

    // Pass the new data to the Chart component
    return newData;
  };

  const handleDataChange3 = () => {
    const newData = Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
    ]);
    return newData;
  };

  return (
    <div id="page">
      <Grid container spacing={2} sx={{ margin: "10px 20px 0 10px" }}>
        <Grid item xs={12} sm={6} key={1}>
          {/* First Card */}
          <Card sx={{ height: "210px", boxShadow: "none", borderRadius: "10px" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "20%", width: "100%", margin: "5px 0" }}>
              <Typography className="checking-account-text">{"Checking account"}</Typography>
              <div className="custom-card-content">
                <Select
                  value={selectedOption1}
                  className="custom-select"
                  onChange={(e) => setSelectedOption1(e.target.value)}
                >
                  {options1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  value={selectedOption2}
                  className="custom-select"
                  onChange={(e) => setSelectedOption2(e.target.value)}
                >
                  {options2.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </CardContent>
            <CardContent sx={{ height: "80%", width: "100%", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
              <Chart data={handleDataChange()} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} key={2}>
          {/* Second Card */}
          <Card sx={{ height: "210px", boxShadow: "none", borderRadius: "10px" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "20%", width: "100%", margin: "5px 0" }}>
              <Typography className="checking-account-text2">{"Invoices owed to you"}</Typography>
              <div className="custom-card-content">
                <Button
                  variant="contained"
                  color="primary"
                  className="custom-button"
                  onClick={handleOpenPopup}
                >
                  New Sales Invoice
                </Button>
              </div>
            </CardContent>
            <CardContent sx={{ height: "80%", width: "100%", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
              <SingleBar data={handleDataChange2()} />
            </CardContent>
          </Card>
        </Grid>
        {/*Third Card*/}
        <Grid item xs={12} sm={6} key={3}>
          <Card sx={{ height: "210px", boxShadow: "none", borderRadius: "10px" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "20%", width: "100%", margin: "5px 0" }}>
              <Typography className="checking-account-text2">{"Total cash flow"}</Typography>
              <div className="custom-card-content3">
                <div className="square" style={{ backgroundColor: "hsl(120deg 44.09% 49.8%)" }}></div>
                <div className="square-text">In</div>
                <div className="square" style={{ backgroundColor: "hsl(159.89deg 97.88% 37.06%)" }}></div>
                <div className="square-text">Out</div>
              </div>
            </CardContent>
            <CardContent sx={{ height: "80%", width: "100%", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
              <DoubleBar data={handleDataChange3()} />
            </CardContent>
          </Card>
        </Grid>
        {/*Fourth Card*/}
        <Grid item xs={12} sm={6} key={4}>
          <Card sx={{ height: "210px", boxShadow: "none", borderRadius: "10px" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "20%", width: "100%", margin: "5px 0" }}>
              <Typography className="checking-account-text2">{"Account watchlist"}</Typography>

            </CardContent>
            <CardContent sx={{ height: "80%", width: "100%", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
              <div className="custom-card-content3" style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 0.5, display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                  <div style={{ flexDirection: "column" }} key={1}>
                    <Typography style={{ fontSize: "1rem", fontWeight: "bold", color: "hsl(216deg 4.42% 77.84%)" }} variant="h6">Account</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>Sales</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>Advertising</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>Inventory</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>Entertainment</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>Product</Typography>
                  </div>
                </div>
                <div style={{ flex: 0.25, display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                  <div style={{ flexDirection: "column" }} key={2}>
                    <Typography style={{ fontSize: "1rem", fontWeight: "bold", color: "hsl(216deg 4.42% 77.84%)" }} variant="h6">This Month</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>24759</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>56983</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>31846</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>89234</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>63175</Typography>
                  </div>
                </div>
                <div style={{ flex: 0.25, display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                  <div style={{ flexDirection: "column" }} key={3}>
                    <Typography style={{ fontSize: "1rem", fontWeight: "bold", color: "hsl(216deg 4.42% 77.84%)" }} variant="h6">YTD</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>87413</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>43897</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>76541</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>26984</Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>51837</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
      {/* Popup */}
      <Dialog open={isPopupOpen} onClose={handleClosePopup} fullWidth maxWidth="sm">
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* File Upload Input */}
          <FormControl>
            <Input type="file" />
          </FormControl>

          {/* Additional content can be added below the file upload input */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Item;
