import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'

const SingUP = () => {

    const handaleSingUp = event => {
        event.preventDefault()

    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-10">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl h-auto bg-base-100">
                    <h1 className="text-3xl mt-5 font-bold text-center">SingUP now</h1>
                    <form onSubmit={handaleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input className='btn btn-primary' type="submit" value="SingUp" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Alraday Have an account? <Link className='text-orange-600 font-bold' to='/login'>Sing Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUP;