import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { TextField, Button, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const [contactInfo, setContactInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert('Checkout successful!');
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      
      {/* Cart Items List */}
      <div style={{ marginBottom: 20 }}>
        <Typography variant="h6" gutterBottom>Your Cart:</Typography>
        <List>
          {cartItems.length === 0 ? (
            <Typography variant="body1">Your cart is empty</Typography>
          ) : (
            cartItems.map(item => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={`${item.title} - ${item.quantity} x $${item.price}`}
                  secondary={`Total: $${item.price * item.quantity}`}
                />
              </ListItem>
            ))
          )}
        </List>
        <Divider style={{ margin: '10px 0' }} />
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Contact Information"
          fullWidth
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Payment Information"
          fullWidth
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Complete Purchase
        </Button>
      </form>

      {/* Total Price */}
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Total: ${getTotalPrice().toFixed(2)}
      </Typography>
    </div>
  );
};

export default Checkout;
