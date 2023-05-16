import React from 'react'

const Form = () => {
  return (
    <div className='container text-center mt-4'>
      <h1>********************************************************************</h1>
      <h1>FORMS (EVENTS)</h1>
      <form >

        <div className="mb-3">
          <label htmlFor="username" className="form-label">USERNAME: <span className="text-danger fw-bold"></span> </label>
          <input type="text" className="form-control" id="username" />

        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">USERNAME: <span className="text-danger fw-bold"></span> </label>
          <input type="text" className="form-control" id="username" />

        </div>



      </form>
    </div>
  )
}

export default Form