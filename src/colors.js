import React from "react";
import "./App.css";
import { Grid } from "@mui/material";

export default function Colors() {
  return (
    <div className="colors">
      <Grid container columnSpacing={3} columns={8}>
        <Grid item  xs={4}>
          <div className=" color_div primary">
            <p>Primary</p>
            <p>#4e73df</p>
          </div>
        </Grid>
        <Grid item  xs={4}>
          <div className=" color_div success">
            <p>Success</p>
            <p>#1cc88a</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div info">
            <p>Info</p>
            <p>#36b9cc</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div warning">
            <p>Warning</p>
            <p>#f6c23e</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div danger">
            <p>Danger</p>
            <p>#e74a3b</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div secondary">
            <p>Secondary</p>
            <p>#858796</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div light">
            <p>Light</p>
            <p>#f8f9fc</p>
          </div>
        </Grid>
        <Grid item xs={4} >
          <div className=" color_div  dark">
            <p>Dark</p>
            <p>#5a5c69</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
