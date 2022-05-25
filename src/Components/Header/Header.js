import React from 'react'

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input type="text" placeholder='Enter Your Todo' className='form-control mt-5' />
        </div>
        <div className=' d-flex justify-content-center align-items-center mt-4'>
          <button className='btn btn-primary'>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  )
}
