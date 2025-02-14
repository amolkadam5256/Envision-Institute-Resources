import axios from 'axios';
import React, { useState } from 'react'

const MockAPI = () => {


    const [studentName, setStudentName] = useState();
    const [studentId, setStudentId] = useState();
    const [items, setItems] = useState([]);


    const sendName = (e) => {
        setStudentName(e.target.value);
        console.log(e.target.value)
    }


    const sendId = (e) => {
        setStudentId(e.target.value);
        console.log(e.target.value)
    }

    const sentData = () => {
        axios.post('https://67a9c43c6e9548e44fc4c6a9.mockapi.io/StudentDB', {
            'studentName': studentName,
            'studentId': studentId,
        })
    }

    const getData = () => {
        axios.get('https://67a9c43c6e9548e44fc4c6a9.mockapi.io/StudentDB').then((response) => {
            console.log(response.data);
            // setItem(response.data);

        }).catch((error) => {

            console.log(error);
        })

    }


    return (
        <>
            <div className='text-start'>
                <h1 className='text-center' >API in MockAPI</h1>
                <div className=''>

                    <div>
                        <label>Student ID :</label>
                        <input type="text" className='form-control' onChange={sendId} />
                    </div>

                    <div>
                        <label>Student Name :</label>
                        <input type="text" className='form-control' onChange={sendName} />
                    </div>


                    <div>
                        <button type='button' className='btn btn-success' onClick={sentData}>
                            Send Data
                        </button>

                        <button type='button' className='btn btn-success' onClick={getData}>
                            Get Data
                        </button>
                    </div>

                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Student Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i.studentId}</td>
                                            <td>{i.studentName}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default MockAPI
