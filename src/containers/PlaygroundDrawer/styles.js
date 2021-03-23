import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  sideListItem: {
    transition: "0.1s all ease-in",
    "&:hover": {
      borderRight: "5px solid #2089dc",
    },
    "&:focus": {
      borderRight: "5px solid #2089dc",
    },
  },
}));

export default styles;
