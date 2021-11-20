import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Divider from '@material-ui/core/Divider';
import Footer from "./box"
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const {item} = props

  return (
    <div class="" >
        <img class="card-img-top" src={item.image} style={{height:100, width:100}} alt="Card image cap"/>
        <div class="card-body">
            {/* <Footer/> */}
            <Divider/>
                <div className="mt-2" style={{display:"flex"}}>
                    <h4 style={{color:"#1DA5E8"}} className="mt-2 ">$15.00 </h4>
                    
                    <span style={{marginLeft:20,borderRight: "1px solid lightgray",height: 40}}></span>
                    
                    
                    <button  className="btn-cart" style={{color:"#FFFFFF", marginLeft:15}}  >
                        Add to Cart
                    </button>
                </div>

    
            {/* <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
                                    
    // <Card className={classes.root} elevation={0}>
    //     <CardMedia
    //       className={classes.media}
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //     </CardContent>
    // </Card>
  );
}
