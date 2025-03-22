<script>
  import ThreeItemGrid from '$components/ThreeItemGrid.svelte';
  import Carousel from '$components/Carousel.svelte';
  
  // Your products data
  let products = [
    {
      id: '1',
      name: 'Sarsi Spice',
      description: 'As nature lovers and passionate about exploring Vietnam\'s unique resources, we are always steadfast in our philosophies on the journey to find the true beauty of the skin.',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://example.com/sarsi-spice.jpg', // Replace with actual image URL
      price: 25.99
    },
    {
      id: '2',
      name: 'Sarsi Spice 10',
      description: 'A facial toner that tightens pores and balances skin. Infused with natural extracts, it helps restore skin’s natural pH and moisture.',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://example.com/sarsi-spice-10.jpg', // Replace with actual image URL
      price: 15.99
    },
    {
      id: '3',
      name: 'Sarsi Spice 11',
      description: 'A body scrub that gently exfoliates dead skin cells, revealing smoother, brighter skin. Perfect for a spa-like experience at home.',
      ingredients: '95% Natural Ingredients',
      imageUrl: 'https://example.com/sarsi-spice-11.jpg', // Replace with actual image URL
      price: 20.99
    }
  ];

  // Optional: Split your products into featuredCollection if needed
  let featuredCollection = products.slice(0, 3); // Using all products as featured for now
</script>

<svelte:head>
  <title>Home – SvelteKit Commerce</title>
</svelte:head>

<main>
  <section>
    <div class="lg:h-[90vh] bg-white">
      <ThreeItemGrid products={featuredCollection} />
    </div>
  </section>
  <section>
    <Carousel items={featuredCollection} />
  </section>
  <section>
    <div
      class="flex flex-col px-8 py-20 text-black border border-gray-300 bg-white lg:flex-row lg:items-center"
    >
      <div
        class="flex-none mb-4 mr-8 text-3xl font-black text-left md:text-4xl lg:mb-0 lg:w-1/3 lg:text-right lg:text-6xl"
      >
        Dessert dragée halvah croissant.
      </div>
      <div>
        <div class="lg:text-2xl text-black">
          Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon
          bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans.
          Tiramisu sweet roll cheesecake pie carrot cake.
        </div>
        <button class="mt-4 font-bold text-svelteOrange hover:text-svelteDark lg:text-2xl">
          Read it here
        </button>
      </div>
    </div>
  </section>
</main>

<style>
  /* Ensure uniform product size */
  .product-item {
    height: 300px; /* Adjust the height as needed */
    width: 100%;
    object-fit: cover; /* Ensures images do not distort */
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust the size of grid items */
    gap: 20px;
  }
</style>
