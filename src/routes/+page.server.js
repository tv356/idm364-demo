import { getAllCollections } from '$utils/shopify';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function load({ url }) {
  const res = await getAllCollections();
  if (res.status === 200) {
    const products = res.body?.data?.collections?.edges;

    if (products) {
      return {
        props: { products }  // Ensure products are returned inside the props object
      };
    }
    throw error(404, 'Products not found'); // Use `throw error` for proper error handling
  } else {
    throw error(res.status, 'Failed to fetch data');
  }
}
