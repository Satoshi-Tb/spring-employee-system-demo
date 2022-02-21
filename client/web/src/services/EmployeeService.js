import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
export const saveEmployee = async (employee) => {
  return await axios.post(EMPLOYEE_API_BASE_URL, employee);
};

export const getAllEmployees = async () => {
  return await axios.get(EMPLOYEE_API_BASE_URL);
};
