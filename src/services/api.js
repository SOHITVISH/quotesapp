const BASE_URL = 'api.quotable.io';

const api = {
  get: async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return response.json();
  },
};

export default api;