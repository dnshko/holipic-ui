import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles =  makeStyles((theme) => ({
  root: {
    minHeight: "150px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
      padding: theme.spacing(2)
  },

}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={0}>
        <CardContent className={classes.content}>
            
            <h5 className="">{props.data.title}</h5>
            <p style={{fontSize: 12}}>{props.data.description}</p>
        </CardContent>
    </Card>
  );
}
