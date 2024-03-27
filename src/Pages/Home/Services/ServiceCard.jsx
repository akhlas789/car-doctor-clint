/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ services }) => {
    return (

        <div>
            <div className="card  bg-base-100 shadow-xl mt-5 ">
                <figure className="px-10 pt-10 h-[150px]">
                    <img src={services.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{services.title}</h2>
                    <div className="card-actions flex items-center justify-center">
                        <p className="text-[#FF3811] font-semibold">Price : ${services.price}</p>
                        <button className="text-[#FF3811]">{<FaArrowRight />}</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;