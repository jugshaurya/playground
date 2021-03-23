import React from "react";

import { Drawer, Fab } from "@material-ui/core";
import styles from "./PropDrawer.module.css";

export default function PropDrawer({ children }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment>
        <Fab
          style={{
            position: "fixed",
            right: "0.5rem",
            bottom: "1rem",
          }}
          variant="extended"
          size="small"
          color="secondary"
          onClick={toggleDrawer("right", true)}
        >
          Prop Explorer
        </Fab>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <div className={styles.propdrawer_content}>{children}</div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
