import { useContext } from 'react';


import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import { AuthContext } from '../../../providers/AuthProvider';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';


const Login = () => {
   
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">

            <div className="card  max-w-sm shadow-2xl bg-base-100 p-11">
            <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                   
                    <div className="form-control mt-6">
                        <input  className="btn btn-blue-600" type="submit" value="Login" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>
            </div>
        </div>
    </div>
    );
};

export default Login;