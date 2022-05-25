import React from 'react'
import "../../../node_modules/bootstrap/dist/css/awais.css";
import { data } from './data';
import Todolist from './todolist';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [student, setStudents] = useState(data);
  const [input, setInput] = useState("");

  const ctaHandler = () => {
    let inputs = {
      input,

    }
    console.log("inputs value", inputs);
    // add new data

  }

  return (

    <div className="container">
      <div className="row">
        <div className="col d-flex">
          <input type="text" placeholder='Enter Your Todo' name='name' className='form-control w-50 ms-5 mt-4' onChange={(e) => setInput(e.target.value)} />
          <button className='btn btn-primary mt-4 ms-4' onClick={ctaHandler} >
            <FontAwesomeIcon icon={faPlus} className="px-2" />
          </button>
        </div>
      </div>
      <br />
      <div className='container ms-4'>
        <table className='table table-primary'>
          <thead>
            <tr>
              <th>
                No:
              </th>
              <th scope='col'>
                Your Todo
              </th>
            </tr>
          </thead>
          {
            student.map((item, index) => {
              return (
                <Todolist
                  student={item}
                  index={index}
                />
              );
            })};
        </table>
      </div>
    </div>
  )
}
