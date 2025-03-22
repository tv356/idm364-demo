// src/routes/+page.server.js
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const res = await fetch('/api/products'); // Fetch from your custom API route
    const data = await res.json();

    if (data?.products) {
      return { products: data.products }; // Pass products to your page
    } else {
      throw new Error('Products not found');
    }
  } catch (err) {
    console.error(err);
    throw error(404, 'Products not found or error occurred.');
  }
}
