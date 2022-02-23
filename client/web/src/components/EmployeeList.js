import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../services/EmployeeService";
import { Employee } from "./Employee";

export const EmployeeList = () => {
  console.log("EmployeeList called");
  const [loading, setLoading] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);

  const handleDelete = (id) => {
    (async () => {
      try {
        const result = await deleteEmployee(id);
        console.log(result);

        const newEmployeeList = employeeList.filter((item) => item.id !== id);
        setEmployeeList(newEmployeeList);
      } catch (error) {
        console.log(error);
        alert("削除に失敗しました");
      }
    })();
  };
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const list = await getAllEmployees();
        console.log(list);
        setEmployeeList(list);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {!loading &&
              employeeList.map((employee) => (
                <Employee
                  key={employee.id}
                  employee={employee}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
