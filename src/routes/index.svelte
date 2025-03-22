<script context="module" lang="ts">
  export async function load() {
    const response = await fetch('/api/products');
    const { products } = await response.json();
    return { props: { products } };
  }
</script>

<script>
  export let products: Array<{
    id: string;
    name: string;
    description: string;
    ingredients: string;
    imageUrl: string;
    price: number;
  }>;
</script>

<main class="container mx-auto">
  <h1 class="text-3xl font-bold mb-4">Our Products</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each products as product}
      <div class="border p-4 rounded-lg">
        <img src={product.imageUrl} alt={product.name} class="w-full h-56 object-cover mb-4 rounded-md" />
        <h2 class="text-xl font-semibold">{product.name}</h2>
        <p class="text-sm text-gray-500">{product.ingredients}</p>
        <p class="mt-2">{product.description}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-bold">${product.price}</span>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
        </div>
      </div>
    {/each}
  </div>
</main>
