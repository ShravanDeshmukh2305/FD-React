import axios from "axios";

const API_URL = "http://localhost:5000/api/banks";

export const getBanks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching bank records:", error);
    return [];
  }
};

export const createBank = async (bankData) => {
  try {
    const response = await axios.post(API_URL, bankData);
    return response.data;
  } catch (error) {
    console.error("Error creating bank record:", error);
    throw error;
  }
};

export const updateBank = async (id, bankData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, bankData);
    return response.data;
  } catch (error) {
    console.error("Error updating bank record:", error);
    throw error;
  }
};
