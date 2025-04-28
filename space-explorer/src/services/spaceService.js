const BASE_URL = 'https://api.le-systeme-solaire.net/rest.php/bodies';

export const fetchBodies = async () => {
  try {
    const response = await fetch(`${BASE_URL}?rowData=false`);
    if (!response.ok) {
      throw new Error('Failed to fetch bodies.');
    }
    const data = await response.json();
    return data.bodies;
  } catch (error) {
    console.error('Failed to fetch bodies:', error);
    throw error;
  }
};

export const fetchBodyById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch body details.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch body details:', error);
    throw error;
  }
};