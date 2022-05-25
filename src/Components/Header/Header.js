import React from 'react'
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
    <div>
      <table>
        <tr>
          <th>
            Add Todo
          </th>
        </tr>
        {
          student.map((item) => {
            return <Todolist
              students={item}
            />
          })
        }
      </table>
    </div>
    // <div className="container">
    //   <div className="row">
    //     <div className="col">
    //       <div className='d-flex'>
    //         <input type="text" placeholder='Enter Your Todo' name="name" value={name} className='form-control mt-5 w-50 mx-3'
    //         />
    //         <button className='btn btn-primary mt-5' >
    //           <FontAwesomeIcon icon={faPlus} />
    //           Add Todo
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
