import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
export const saveEmployee = async (employee) => {
  const response = await axios.post(EMPLOYEE_API_BASE_URL, employee);
  return response.data;
};

export const getAllEmployees = async () => {
  const response = await axios.get(EMPLOYEE_API_BASE_URL);
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
  return response.data;
};
