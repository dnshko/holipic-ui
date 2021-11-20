import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import ProductModal from "./productModal";
import ProductModal1 from "./productModal1";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardActionArea from "@material-ui/core/CardActionArea";

import { Hidden } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
  },
  media: {
    height: 0,
    paddingTop: "90.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const { item } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Hidden xsDown>
        <ProductModal open={open} item={item} onClick={setOpen} />
      </Hidden>

      <Hidden smUp>
        <ProductModal1 open={open} item={item} onClick={setOpen} />
      </Hidden>
      <CardActionArea onClick={() => handleOpen()}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            // image={config.staticUrl + item.image}
            image={item.image}
          />
          <CardContent style={{ marginBottom: -20 }}>
            <h2 style={{ fontSize: 13, marginTop: -5 }} className="mb-2">
              {item.title}
            </h2>
            <Divider />
            <CardActions>
              <div
                style={{ justifyContent: "space-around", display: "flex" }}
                className="mt-1"
              >
                <div>
                  <h4
                    style={{ color: "#1DA5E8", fontSize: 13 }}
                    className="mt-2"
                  >
                    ${item.price}
                  </h4>
                </div>

                <Divider orientation="vertical" flexItem />
                <div className="pl-1">
                  <button className="btn-cart1" onClick={() => handleOpen()}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </CardActions>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}
