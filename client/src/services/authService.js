import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
      return error.response.data;
    } else if (error.request) {
      console.error("Error request:", error.request);
      return "The request was made but no response was received";
    } else {
      console.error("Error message:", error.message);
      return error.message;
    }
  }
};
