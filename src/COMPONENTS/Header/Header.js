import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Link to="/">Home</Link>
      <a
        href="https://github.com/Felipevillajr/Felipevillajr"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </section>
  );
}
