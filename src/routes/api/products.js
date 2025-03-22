// src/routes/api/products.js
import { json } from '@sveltejs/kit';

export async function GET() {
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

  return json({ products });
}
