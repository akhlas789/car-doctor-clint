import { useLoaderData } from "react-router-dom";

const ChackOut = () => {
    const servise = useLoaderData();
    return (
        <div >
            <h2>book servise: {servise.title}</h2>
            <form className="bg-slate-200 p-10 rounded-lg mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6 flex">
                        <button>Login</button>
                        <input className="btn btn-primary btn-block" value="Order Confirm" type="submit" />
                    </div>
            </form>
        </div>
    );
};

export default ChackOut;