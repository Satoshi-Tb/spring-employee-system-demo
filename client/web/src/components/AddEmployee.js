import { useRef, useState } from "react";
import { saveEmployee } from "../services/EmployeeService";

export const AddEmployee = () => {
  // 入力値保持
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // 処理中フラグ
  const [isProcessing, setIsProcessing] = useState(false);

  // refによる直接DOM操作用
  // reactの実装プラクティスとして、DOMは直接操作しないため、用途は限定すること。
  // 今回はフォーカス制御に利用する。
  const refInputFirstName = useRef(null);
  const refInputLastName = useRef(null);
  const refInputEmail = useRef(null);

  const inputFirstName = (str) => {
    console.log(str);
    setFirstName(str);
  };

  const inputLastName = (str) => {
    console.log(str);
    setLastName(str);
  };

  const inputEmail = (str) => {
    console.log(str);
    setEmail(str);
  };

  //TODO state変更内容をinput部品の見た目に反映させる方法は？
  const clearForm = () => {
    console.log("clear");
    // ref経由で直接DOM操作。これは正しくない。
    // 内部管理値（state）と同期しないし、再描画されない
    // refInputLastName.current.value = "";
    // refInputLastName.current.value = "";
    // refInputEmail.current.value = "";

    // set関数による初期化
    // これは内部管理値は反映されるが、見た目に影響しない
    setFirstName("");
    setEmail("");
    setLastName("");
  };

  const onSaveClick = async (event) => {
    event.preventDefault();
    console.log(refInputFirstName.current);
    if (firstName === "") {
      alert("firstNameを入力してください。");
      refInputFirstName.current.focus();
      return;
    }

    if (lastName === "") {
      alert("lastNameを入力してください。");
      refInputLastName.current.focus();
      return;
    }

    if (email === "") {
      alert("emailを入力してください。");
      refInputEmail.current.focus();
      return;
    }
    setIsProcessing(true);
    try {
      const employeeData = {
        firstName: firstName,
        lastName: lastName,
        emailId: email,
      };
      const response = await saveEmployee(employeeData);
      console.log(response.data);

      clearForm();
      alert("データ登録に成功しました");
      console.log(`${firstName},${lastName},${email}`);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました。時間をおいて再度試してください");
    } finally {
      setIsProcessing(false);
    }
  };

  const onDeleteClick = () => {
    alert("delete!");
    clearForm();
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add new employee</h1>
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
          ></input>
          {firstName}
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
          ></input>
          {lastName}
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
          ></input>
          {email}
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-800"
            onClick={onSaveClick}
            disabled={isProcessing}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-800"
            onClick={onDeleteClick}
            disabled={isProcessing}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
