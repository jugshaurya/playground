import React from "react";
import { Link } from "react-router-dom";

import { Typography, Paper, Grid } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

import playgroundComponents from "../../shared/playgroundComponents";

function Expore() {
  return (
    <section>
      <Typography variant="h2">Explore</Typography>
      <Grid container spacing={1} style={{ marginTop: 20 }}>
        {playgroundComponents.map((elm, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link to={elm.path}>
                <Paper
                  style={{
                    height: 60,
                    padding: "5px 10px",
                    alignItems: "center",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Typography variant="h5">{elm.name}</Typography>

                  <ArrowForward style={{ position: "absolute", right: 10 }} />
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}

export default Expore;
