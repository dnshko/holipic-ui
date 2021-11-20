import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 200 }}>
      {/* <CardMedia
          className={classes.media}
          image={image}
          title="Holipic App"
        /> */}
      <img src="/img/logo-large.png" style={{ height: 60 }} />
      <CardContent>
        <p>
          Start to fully manage your incomes, customer, staff and improve sales
          by registering your company.
        </p>
      </CardContent>
    </div>
  );
}
