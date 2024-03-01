import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
            
            <div className="d-flex justify-content-center align-items-center bg-white vh-100 vw-100 ">

                <div className=" bg-white p-5 rounded">
                    <h2>Welcome to Malabar Bank</h2>
                    <form className='form-control '>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Branch Name</strong>
                            </label>
                            <input type="text" placeholder='Enter Branch Name' autoComplete='off' name='Branch Name' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>User Name</strong>
                            </label>
                            <input type="text" placeholder='Enter User Name' autoComplete='off' name='User Name' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input type="text" placeholder='Enter Password' autoComplete='off' name='Password' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Mobile Number</strong>
                            </label>
                            <input type="text" placeholder='Enter Mobile Number' autoComplete='off' name='Mobile Number' className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-primary w-100 rounded mt-3'>Login</button>
                    </form>
                    <div>
                    <p>Already Have an Account?</p>
                        <Link to="/signup" className='btn text-white border w-100 bg-secondary  rounded text-decoration-none'>Register</Link>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default Login