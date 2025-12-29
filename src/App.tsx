import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-xl text-center mt-10">TO-DO APP</h1>
      <div className="grid items-center justify-items-center m-10">
        <div className="w-5/6">
          <input
            placeholder="görev girin"
            className="m-1 bg-amber-50 text-amber-800 w-6/8 rounded-md p-1"
          ></input>
          <button className="bg-blue-700 p-1 rounded-md w-1/8 ml-1">
            ekle
          </button>
        </div>

        <ul className="w-5/6 m-3">
          <li className=" p-1 m-1 bg-gray-500 rounded-md w-full text-black">
            görev1
          </li>
          <li className=" p-1 m-1 bg-gray-500 rounded-md w-full text-black">
            görev2
          </li>
          <li className=" p-1 m-1 bg-gray-500 rounded-md w-full text-black">
            görev3
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
