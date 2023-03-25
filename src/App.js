import React from "react";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc = "";

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="">
        <div className="rounded-xl bg-gray-200 p-2 shadow-xl flex flex-col items-center">
          <div>
            <h1 className="font-bold">BMI Calculator</h1>
          </div>
          <div className="flex flex-col items-center">
            <label className="p-2">Weight</label>
            <input
              className="rounded-lg text-center"
              placeholder="KG"
              value={weight}
            ></input>
            <label className="p-2">Height</label>
            <input
              className="rounded-lg text-center"
              placeholder="CM"
              value={height}
            ></input>
          </div>
          <div className="flex flex-col p-2 w-full">
            <button className="my-2 border border-orange-500 bg-orange-500 rounded-lg">
              Submit
            </button>
            <button className="border border-orange-500 rounded-lg">
              Clear
            </button>
          </div>
          <div>
            <p>Your BMI is:{bmi}</p>
            <p>{message}</p>
          </div>
          <div>
            <img src={imgSrc} alt="."></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
