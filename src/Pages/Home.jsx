import React, { useState,useContext } from 'react';
import { Grid ,Button} from '@mui/material';
import PropertyCard from '../Components/PropertyCard';
import Filter from '../Components/Filter';
import { mockData } from '../utils/mockData';
import { CartContext } from '../Context/CartContext';

const Home = () => {
  const [properties, setProperties] = useState(mockData);
  const [filters, setFilters] = useState({ location: '', priceRange: '', bedrooms: '' });
  const { addToCart } = useContext(CartContext);

  // Function to filter properties based on the current filters
  const filteredProperties = properties.filter(property => {
    const matchesLocation = filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const matchesPriceRange = filters.priceRange ? property.price <= parseFloat(filters.priceRange) : true;
    const matchesBedrooms = filters.bedrooms ? property.bedrooms >= parseInt(filters.bedrooms, 10) : true;

    return matchesLocation && matchesPriceRange && matchesBedrooms;
  });
  const handleUpdateProperties = () => {
    setProperties(mockData);
  };
  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      <Button variant="contained" color="primary" onClick={handleUpdateProperties} sx={{ margin: 2 }}>
        Update Properties
      </Button>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} addToCart={addToCart}/>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No properties match the current filters.</p>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;
