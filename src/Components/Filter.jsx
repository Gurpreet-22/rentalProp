import React from 'react';
import { TextField,  Grid } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Price Range"
          name="priceRange"
          type="number"
          value={filters.priceRange}
          onChange={handleFilterChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Bedrooms"
          name="bedrooms"
          type="number"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
