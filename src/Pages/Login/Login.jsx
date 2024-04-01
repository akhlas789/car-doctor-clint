import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';

const Login = () => {

    const { singInUser } = useContext(AuthContex)

    const handaleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-10">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl h-[500px] bg-base-100">
                    <h1 className="text-3xl mt-5 font-bold text-center">Login now</h1>
                    <form onSubmit={handaleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to car doctor? <Link className='text-orange-600 font-bold' to='/singup'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

