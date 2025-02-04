import React from 'react'

const DemoArray = (props) => {
    return (
        <div>
            <ul>
                {
                    props.arr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    }
                    )}

            </ul>
        </div>
    )
}

export default DemoArray
