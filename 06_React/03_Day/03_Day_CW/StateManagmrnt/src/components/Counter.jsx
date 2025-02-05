import React, { useState } from 'react'
import Onchange from './Onchange';

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <h1>Counter using on click arrow function</h1>


                <h2>Count is :{count}</h2>

                <div className='flex mx-10 '>

                    <button className='btn btn-primary px-3 py-2 mx-5 my-5'
                        onClick={() => {
                            setCount(count + 1)
                        }}>
                        Increment
                    </button>

                    <button className='btn btn-primary px-3 py-2 mx-5 my-5'
                        onClick={() => setCount(count - 1)}>
                        Decrement
                    </button>


                    <button className='btn btn-primary px-3 py-2  mx-5 my-5'
                        onClick={() => setCount(0)}>
                        Reset
                    </button>

                </div>

            </div>


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Onchange />
        </>
    )
}

export default Counter
