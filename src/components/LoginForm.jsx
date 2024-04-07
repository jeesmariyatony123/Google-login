import React, { useState } from 'react'
import Google from './Google'

function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}

        if (!formData.email.trim()) {
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (formData.password.length < 6) {
            validationErrors.password = "password should be at least 6 char"
        }


        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
            setFormData({ email: " ", password: " " })

        }
        setFormData({ email: " ", password: " " })

    }

    return (
        // <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        //     <div className='login rounded disabled'>
        //         <h2 className='mb-3'>Login Form</h2>
        //         <form className='needs-validation mb-3'>
        //             <div className="form-group was-validated mb-2">
        //                 <label htmlFor="email" className='form-label'>Email</label>
        //                 <input type="email" className='form-control' required></input>
        //                 <div className="invalid-feedback">
        //                     Please enter your Email
        //                 </div>
        //             </div>
        //             <div className="form-group was-validated mb-2">
        //                 <label htmlFor="password" className='form-label'>Password</label>
        //                 <input type="password" className='form-control' required></input>
        //                 <div className="invalid-feedback">
        //                     Please enter your Password
        //                 </div>
        //             </div>
        //             <div className="form-group form-check mb-2">
        //                 <input type="checkbox" className='form-check-input'></input>
        //                 <label htmlFor="check" className='form-check-label'>Remember me</label>
        //             </div>
        //             <button type='submit' className='btn btn-success w-75 mt-2'>LOGIN</button>
        //         </form>
        //         <Google />

        //     </div>
        // </div>
        <div className='wrapper '>
            <h2 className='mb-3 text-center'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='example@gmail.com'
                        autoComplete='off'
                        className='form-control'
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='******'
                        className='form-control'
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className="form-group form-check mb-2">
                    <input type="checkbox" className='form-check-input'></input>
                    <label htmlFor="check" className='form-check-label'>Remember me</label>
                    <a href='#' className='form-check-label text-info ' style={{ float: 'right', textDecoration: 'none' }}>Forgot Password?</a>

                </div>

                <div className='text-center'>
                    <button className='btn btn-secondary w-75 mt-2 ' type="submit">Login</button>

                </div>                <h6 className='text-center pt-2'>Don't have an account? <a href="" className='text-info' style={{ textDecoration: 'none' }}>Register</a></h6>

            </form>
            <div className='google pt-3'>
                <Google />
            </div>

        </div>
    )
}

export default LoginForm