import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const BookServise = () => {
    const servise = useLoaderData();
    // console.log(servise)
    const { user } = useContext(AuthContex)

    const handaleBookServise = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const order = {
           customerName: name,
            date,
            email,
            price,
            servise: servise._id,
        }
        console.log(order)

    }

    return (
        <div >
            <h2 className=" text-3xl flex justify-center mb-5">Book Servise By  <p className="text-red-500 ml-2">{servise.title}</p></h2>
            <form onSubmit={handaleBookServise} className="bg-slate-200 p-10 rounded-lg mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$ ' + servise.price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6 flex">
                    <input className="btn btn-primary btn-block" value="Order Confirm" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default BookServise;