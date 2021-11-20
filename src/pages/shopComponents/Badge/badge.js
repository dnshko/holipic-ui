import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    backgroundColor:"#1DA5E8",
    color:"white",
    // top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

var $ = window['jQuery']

const toogleClass = () => {
  $('html,body').toggleClass('active')
}
export default function CustomizedBadges(props) {
  var shoppingCart = JSON.parse(localStorage.getItem('shopping_cart')) || [];
  return (
    <IconButton aria-label="cart" onClick={()=>{ props.onClick(true); toogleClass()} }>
      <StyledBadge badgeContent={shoppingCart.length} >
        <ShoppingCartIcon/>
      </StyledBadge>
    </IconButton>
  );
}
