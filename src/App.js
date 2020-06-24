import React, { useState } from "react";

import "./App.css";
import Chess from "./components/Chess";
import { TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [number, setNumber] = useState(10);

  const handlechange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <Chess number={number} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <TextField
              id="standard-basic"
              onChange={handlechange}
              label="Add Number"
            ></TextField>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
