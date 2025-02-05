import React, { useState } from 'react';

const Onchange = () => {
    const [value, setValue] = useState(0);

    const increment = () => setValue(value + 1);

    const decrement = () => setValue(value - 1);

    const reset = () => setValue(0);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
    };

    return (
        <>
            <h1>Counter using OnChange event </h1>
            <p>Current Value: {value}</p>

            <input type="number" value={value} onChange={handleChange} className="form-control my-3" />

            <button className="btn btn-primary px-3 py-2 mx-5 my-5" onClick={increment}>
                Increment
            </button>

            <button className="btn btn-primary px-3 py-2 mx-5 my-5" onClick={decrement}>
                Decrement
            </button>

            <button className="btn btn-primary px-3 py-2 mx-5 my-5" onClick={reset}>
                Reset
            </button>
        </>
    );
};

export default Onchange;
