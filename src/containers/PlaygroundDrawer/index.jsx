import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import playgroundComponents from "../../shared/playgroundComponents";
import drawerStyles from "../Drawer/styles";

export default function PlaygroundDrawer({ onDrawerToggle }) {
  const classes = drawerStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <div style={{ padding: "0.5rem" }}>
        <Link to="/" onClick={() => onDrawerToggle(false)}>
          <Typography variant="h5">
            Playground{" "}
            <span role="img" aria-label="playground">
              🚀
            </span>
          </Typography>
        </Link>
      </div>
      <List style={{ padding: "0.5rem" }}>
        {playgroundComponents.map((elm, index) => (
          <Link
            key={elm.name}
            to={elm.path}
            onClick={() => onDrawerToggle(false)}
          >
            <ListItem
              button
              key={elm.name}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              className={classes.sideListItem}
            >
              <ListItemText primary={elm.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
