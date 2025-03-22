import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function load() {
  try {
    // Fetch the data from your API
    const response = await fetch('/api/products'); // Assuming your API is hosted at this endpoint
    const data = await response.json();

    if (response.ok) {
      // Return the products as props
      return {
        props: { products: data.products } // Assuming the data returned has a 'products' key
      };
    } else {
      throw error(404, 'Products not found');
    }
  } catch (err) {
    console.error('Error fetching products:', err);
    throw error(500, 'Failed to fetch data');
  }
}
