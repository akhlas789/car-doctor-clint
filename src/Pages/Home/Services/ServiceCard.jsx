/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mt-5 ">
                <figure className="px-10 pt-10 h-[150px]">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <div className="card-actions ">
                        <p className="text-[#FF3811] font-semibold">Price : ${service.price}</p>
                    </div>
                    <div className="flex items-center text-[#FF3811] font-semibold justify-between">
                        <Link to={`/book/${service._id}`}>
                            <button className="">Book Now</button>
                        </Link>
                        {<FaArrowRight />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;