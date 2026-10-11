
const API_BASE_URL =
  "https://openapi.programming-hero.com/api/bazardor";

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

export const getProducts = async () => {
  return fetchAPI("/products");
};

