<script>
  import ThreeItemGrid from '$components/ThreeItemGrid.svelte';
  import Carousel from '$components/Carousel.svelte';

  /** @type {{data: import('./$types').PageData}} */
  let { data } = $props();

  let clothesCollection = $derived(data.products[0]?.node?.products?.edges);
  let featuredCollection = $derived(data.products[1]?.node?.products?.edges);
</script>

<svelte:head>
  <title>Home – Natural Soap</title>
</svelte:head>

<main>
  <section>
    <div class="lg:h-[90vh] bg-beige">
      <ThreeItemGrid products={featuredCollection} />
    </div>
  </section>
  <section>
    <Carousel items={clothesCollection} />
  </section>
  <section>
    <div
      class="flex flex-col px-8 py-20 text-gray-800 border border-gray-300 bg-white lg:flex-row lg:items-center"
    >
      <div
        class="flex-none mb-4 mr-8 text-3xl font-serif text-left md:text-4xl lg:mb-0 lg:w-1/3 lg:text-right lg:text-6xl"
      >
        Handcrafted Soap Delights
      </div>
      <div>
        <div class="lg:text-2xl text-gray-700">
          Made with all-natural ingredients, our soaps nourish and cleanse your skin with love. 
          Experience the soothing touch of nature's finest elements.
        </div>
        <button class="mt-4 font-bold text-softGreen hover:text-softLavender lg:text-2xl">
          Discover Our Collection
        </button>
      </div>
    </div>
  </section>
</main>

<style>
  /* Colors for a natural feel */
  :global(body) {
    font-family: 'Poppins', sans-serif; /* Natural soft font */
  }

  :global(.text-softGreen) {
    color: #A8D5BA; /* Light green color */
  }

  :global(.text-softLavender) {
    color: #C7A4D6; /* Soft lavender for hover effect */
  }

  :global(.bg-beige) {
    background-color: #F4E1D2; /* Soft beige background */
  }

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

  /* Button styling */
  button {
    background-color: #A8D5BA; /* Soft green button background */
    border-radius: 25px;
    padding: 12px 24px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #C7A4D6; /* Soft lavender on hover */
    color: white;
  }
</style>
