import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS

const App = () => {
  const [count, setCount] = useState(0); // Current visitor count
  const prevCount = useRef(0); // Stores previous count

  // Simulating API call to fetch visitor count on mount
  useEffect(() => {
    console.log("Fetching visitor count...");
    setTimeout(() => {
      const initialCount = Math.floor(Math.random() * 100) + 1; // Simulating data fetch
      prevCount.current = initialCount; // Store fetched count
      setCount(initialCount);
    }, 1000);
  }, []);

  useEffect(() => {
    if (prevCount.current !== count) {
      console.log(`Visitors updated: Previous(${prevCount.current}) → Current(${count})`);
      prevCount.current = count; // Update ref to avoid unnecessary re-renders
    }
  }, [count]);

  return (
    <div className="app-container d-flex justify-content-center align-items-center ">
      <div className="counter-box text-center p-4">
        <h2>📊 Visitor Counter</h2>
        <p className="fs-4">
          Previous Visitors: <span className="text-muted">{prevCount.current}</span>
        </p>
        <h1 className="display-2 count">{count}</h1>
        <button className="btn btn-primary mt-3" onClick={() => setCount(count + 1)}>
          Increment Visitor Count
        </button>
      </div>
    </div>
  );
};

export default App;
