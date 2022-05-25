import React from 'react'
import "../../../node_modules/bootstrap/dist/css/awais.css";
import { data } from './data';
import Todolist from './todolist';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [student, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("")

  return (

    <div className="container">
      <div className="row">
        <div className="col d-flex">
          <input type="text" placeholder='Enter Your Todo' className='form-control w-50 ms-5 mt-4' />
          <button className='btn btn-primary mt-4 ms-4' >
            <FontAwesomeIcon icon={faPlus} className="px-2" />
          </button>
        </div>
      </div>
      <br />
      <div>
        <table className='table table-primary ms-4'>
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
              return <Todolist
                student={item}
                index={index}
              />
            })
          }
        </table>
      </div>
    </div>
  )
}
