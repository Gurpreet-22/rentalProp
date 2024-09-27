import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Typography,  List, ListItem, ListItemText, IconButton } from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline, Delete } from '@mui/icons-material';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);

  return (
<Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4">Your Cart</Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.title} - ${item.quantity} x $${item.price}`}
              secondary={`Total: $${item.price * item.quantity}`}
            />
            <IconButton onClick={() => decreaseQuantity(item.id)} color="primary">
              <RemoveCircleOutline />
            </IconButton>
            <IconButton onClick={() => increaseQuantity(item.id)} color="primary">
              <AddCircleOutline />
            </IconButton>
            <IconButton onClick={() => removeFromCart(item.id)} color="secondary">
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5">Total: ${getTotalPrice().toFixed(2)}</Typography>
    </Paper>
  );
};

export default Cart;
