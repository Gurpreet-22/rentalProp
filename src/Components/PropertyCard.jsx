import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const PropertyCard = ({ property,addToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={property.title}
        height="140"
        image={property.image}  
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location: {property.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${property.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Bedrooms: {property.bedrooms}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(property)}>Book Now</Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
