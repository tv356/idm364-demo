// server.js
const express = require('express');
const app = express();

// Define the API route
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: '1',
      name: 'Sarsi Spice',
      description: "As nature lovers and passionate about exploring Vietnam's unique resources...",
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/Hr7JYyJR',
      price: 25.99,
    },
    {
      id: '2',
      name: 'Sarsi Spice 10',
      description: 'A facial toner that tightens pores and balances skin...',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/mcfPtgCD',
      price: 15.99,
    },
    {
      id: '3',
      name: 'Sarsi Spice 11',
      description: 'A body scrub that gently exfoliates dead skin cells...',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/t13YPGNz',
      price: 20.99,
    }
  ];

  // Send the JSON response
  res.json({ products });
});

// Export the app for use in serverless functions
module.exports = app;
