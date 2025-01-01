import { useState } from "react";
import React from "react";
import "./App.css";
import SignInForm from "./components/SignInForm";

function App() {
  const [details, setDetails] = useState([{ name: "ram" }]);
  const [typeValue, setTypedValue] = useState("");

  const setValue = () => {
    setDetails([...details, { name: typeValue || "default value" }]);
  };

  const valueDelete = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  return (
    <>
      <div style={{padding : '30px', margin : '50px 500px'}}>
        <div
          style={{
            display: "flex",
            margin: "30px ",
            gap: "20px",
            height: "40px",
          }}
        >
          <input
            type="text"
            style={{ width: "300px", borderRadius: "8px" }}
            onChange={(e) => {
              setTypedValue(e.target.value);
            }}
            required
          />

          <button
            style={{
              color: "white",
              background: "teal",
              width: "80px",
              borderRadius: "8px",
            }}
            onClick={setValue}
          >
            Add
          </button>
        </div>
        <div>
          <p style={{ fontSize: "30px" }}> Typing: {typeValue}</p>
        </div>
        <div gap={"10px"}>
          {details.map((detail, index) => {
            return (
              <div style={{ display: "flex", gap: "20px" }} key={index}>
                <li
                  style={{
                    color: detail.name === "pramod" ? "purple" : "black",
                    fontSize: "30px",
                  }}
                >
                  {detail.name}
                </li>
                <button
                  style={{ background: "crimson", color: "white" }}
                  onClick={() => valueDelete(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
