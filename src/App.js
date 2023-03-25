import React from "react";
import { useState } from "react";
import foto1 from "../src/assets/healthy.png";
import foto2 from "../src/assets/under.png";
import foto3 from "../src/assets/over.png";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid values");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(2));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("Your weight is perfect");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = foto2;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      imgSrc = foto1;
    } else {
      imgSrc = foto3;
    }
  }

  const clear = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="">
        <div className="rounded-xl bg-gray-200 p-2 shadow-xl flex flex-col items-center w-[210px]">
          <div>
            <h1 className="font-bold">BMI Calculator</h1>
          </div>
          <div className=" flex flex-col items-center my-2 ">
            <label className="p-2">Weight</label>
            <input
              className="rounded-lg text-center "
              placeholder="KG"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <label className="p-2">Height</label>
            <input
              className="rounded-lg text-center"
              placeholder="CM"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col p-2 w-full my-2">
            <button
              className="my-2 p-2 border border-orange-500 hover:bg-orange-700 duration-300 bg-orange-500 rounded-lg"
              onClick={calcBmi}
            >
              Submit
            </button>
            <button
              className="border p-2  border-orange-500 rounded-lg"
              onClick={clear}
            >
              Clear
            </button>
          </div>
          <div className="font-bold flex flex-col items-center">
            <p>Your BMI is: {bmi}</p>
            <p>{message}</p>
          </div>
          <div>
            <img src={imgSrc} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
