const API_BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

async function fetchAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${endpoint}`);
  }

  return response.json();
}

export const getCategories = async () => {
  return fetchAPI("/categories");
};

export const getCategoryBySlug = async (slug) => {
  const data = await getCategories();
  const categories = Array.isArray(data) ? data : [];
  const category = categories.find((category) => category.slug === slug);
  return category || null;
};

export const getProducts = async (category) => {
  const endpoint = category ? `/products?category=${category}` : "/products";
  return fetchAPI(endpoint);
};

// export const getProductBySlug = async (slug) => {
//   const products = await fetchAPI("/products");
//   const product = products.find((p) => p.slug === slug);
//   return product || null;
// };

export const getProductById = async (id) => {
  const products = await fetchAPI("/products");
  const product = products.find((p) => p.id === Number(id));
  return product || null;
};
