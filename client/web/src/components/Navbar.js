import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <button
          className="text-white font-bold bg-transparent border-none cursor-pointer inline m-0 p-0"
          onClick={() => navigate("/")}
        >
          Employee Management System
        </button>
      </div>
    </div>
  );
};
