import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="mb-5">
                <h3 className="text-center text-2xl font-bold text-orange-600">Services</h3>
                <h1 className="text-center text-5xl font-bold">Our Service Area </h1>
                <p className="text-center text-pretty mb-5">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 space-y-5 mb-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>
            <div className=" flex justify-center mb-20 mt-10">
                <button className="btn btn-outline  text-[#FF3811]  ">More Services</button>
            </div>

        </div>
    );
};

export default Services;