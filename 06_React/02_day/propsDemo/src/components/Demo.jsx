import 'react';


const content = ["Amol", "Amit", "Ajit", "Aman"];

const Demo = (props) => {
    return (
        <>
            <h2>My Name is {props.name} and from Dharashiv</h2>

            <div className='bg-primary'>
                <ul>
                    {
                        content.map((item, index) => (
                            <li key={index}>  {item} </li>
                        ))
                    }
                </ul>
            </div >
        </>
    )
}

export default Demo
