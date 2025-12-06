const BASE_URL = 'https://akil-backend.onrender.com';

export const fetchOpportunities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/search`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
};

export const fetchOpportunityById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching opportunity by ID:', error);
    throw error;
  }
};
