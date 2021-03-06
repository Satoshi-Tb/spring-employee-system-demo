import { useNavigate } from "react-router-dom";

export const Employee = (props) => {
  const { employee, handleDelete } = props;
  const navigate = useNavigate();
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <button
          className="text-gray-500 font-bold bg-transparent border-none cursor-pointer inline px-2 py-4"
          onClick={() => {
            navigate(`/editEmployee/${employee.id}`);
          }}
        >
          Edit
        </button>
        <button
          className="text-gray-500 font-bold bg-transparent border-none cursor-pointer inline px-2 py-4"
          onClick={() => {
            handleDelete(employee.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
