import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

export const UpdateEmployee = () => {
  const { id } = useParams();

  // 入力値保持
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  // 処理中フラグ
  const [isProcessing, setIsProcessing] = useState(false);

  // フォーカス制御に利用する。
  const refInputFirstName = useRef(null);
  const refInputLastName = useRef(null);
  const refInputEmail = useRef(null);

  const navigate = useNavigate();

  const inputFirstName = (str) => {
    setEmployee({ ...employee, firstName: str });
  };

  const inputLastName = (str) => {
    setEmployee({ ...employee, lastName: str });
  };

  const inputEmail = (str) => {
    setEmployee({ ...employee, emailId: str });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(refInputFirstName.current);
    if (employee.firstName === "") {
      alert("firstNameを入力してください。");
      refInputFirstName.current.focus();
      return;
    }

    if (employee.lastName === "") {
      alert("lastNameを入力してください。");
      refInputLastName.current.focus();
      return;
    }

    if (employee.emailId === "") {
      alert("emailを入力してください。");
      refInputEmail.current.focus();
      return;
    }
    setIsProcessing(true);
    (async () => {
      try {
        const data = await updateEmployee(employee.id, employee);
        console.log(data);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました。時間をおいて再度試してください");
      } finally {
        setIsProcessing(false);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      setIsProcessing(true);
      try {
        const data = await getEmployeeById(employee.id);
        console.log(data);
        setEmployee(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsProcessing(false);
      }
    })();
  }, [employee.id]);

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>update employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => {
              inputFirstName(e.target.value);
            }}
            ref={refInputFirstName}
            name="first_name"
            value={employee.firstName}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => {
              inputLastName(e.target.value);
            }}
            ref={refInputLastName}
            name="last_name"
            value={employee.lastName}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => {
              inputEmail(e.target.value);
            }}
            ref={refInputEmail}
            name="email"
            value={employee.emailId}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-800"
            onClick={handleUpdate}
            disabled={isProcessing}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-800"
            onClick={() => {
              navigate("/employeeList");
            }}
            disabled={isProcessing}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
