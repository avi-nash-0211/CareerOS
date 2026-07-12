import axios from "axios";

const API_URL = "http://localhost:5000/api/careers";

export const getAllCareers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const getCareerById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
export const getEligibleCareers = async (qualification) => {
  const response = await axios.get(
    `${API_URL}/eligible?qualification=${qualification}`
  );

  return response.data;
};