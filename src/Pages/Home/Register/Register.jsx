import { useContext, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../providers/AuthProvider";




const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
const { createUser, updateUserProfile } = useContext(AuthContext);
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);


const onSubmit = (data) => {
    const { password, confirmPassword, ...userData } = data;
    if (password !== confirmPassword) {
      alert('Passwords confirm password do not match')
      
      return;
    }
    console.log(data);
    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                  const saveUser = { name: data.name, email: data.email }
                    reset();
                    fetch('https://language-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                })
                .catch(error => console.log(error))
        })
};


const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-9 bg-base-100">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                  placeholder="Password"
                  className="input input-bordered pr-10"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase letter, one lowercase letter, one number, and one special character</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('confirmPassword', { required: true })}
                  placeholder="Confirm Password"
                  className="input input-bordered pr-10"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
              {errors.confirmPassword && <p className="text-red-600">Confirm Password is required</p>}
            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-blue-600" type="submit" value="Sign Up" />
                            </div>
                        </form>
                       
                        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
    );
};

export default Register;