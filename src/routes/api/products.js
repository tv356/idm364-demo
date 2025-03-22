// src/routes/api/products.js
import { json } from '@sveltejs/kit';

export async function GET() {
  const products = [
    {
      id: '1',
      name: 'Sarsi Spice',
      description: "As nature lovers and passionate about exploring Vietnam's unique resources, we are always steadfast in our philosophies on the journey to find the true beauty of the skin.",
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/Hr7JYyJR',
      price: 25.99,
    },
    {
      id: '2',
      name: 'Sarsi Spice 10',
      description: 'A facial toner that tightens pores and balances skin. Infused with natural extracts, it helps restore skin’s natural pH and moisture.',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/mcfPtgCD',
      price: 15.99,
    },
    {
      id: '3',
      name: 'Sarsi Spice 11',
      description: 'A body scrub that gently exfoliates dead skin cells, revealing smoother, brighter skin. Perfect for a spa-like experience at home.',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://postimg.cc/t13YPGNz',
      price: 20.99,
    }
  ];

  return json({ products });
}
