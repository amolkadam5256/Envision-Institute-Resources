import React, { useState } from "react";
import Fullname from "./Fullname";
import DemoArray from "./DemoArray";
import Navbar from "./Navbar";
import ChildComponent from "./ChildComponent";

const firstName = "John";
const middleName = "Doe";
const lastName = "Smith";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const demoArr = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const App = () => {
  const [message, setMessage] = useState("Hello, World!");

  const updateMessage = () => {
    setMessage("Props Updated!");
  };

  return (
    <>
      <Navbar brand="MyWebsite" links={navLinks} />
      <div>
        <h1>Home Work Day 2</h1>

        <h2>Personal Information</h2>

        <div className="border border-primary p-3">
          <h2>This is App component</h2>
          <p>First Name: {firstName}</p>
          <p>Middle Name: {middleName}</p>
          <p>Last Name: {lastName}</p>
        </div>

        <div className="border border-primary p-3">
          <h2>This is FullName component</h2>
          <Fullname firstNa={firstName} middleNa={middleName} lastNa={lastName} />
        </div>

        <div className="border border-primary p-3">
          <h2>This is array in map component</h2>
          <DemoArray arr={demoArr} />
        </div>

        <div className=" align-items-center justify-content-center">
          <ChildComponent message={message} />
          <button onClick={updateMessage} className="mt-4 btn btn-primary btn-lg">
            Update Props
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
