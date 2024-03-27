import { SlCalender } from "react-icons/sl";
import { FaBlenderPhone } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="bg-black text-white p-12 rounded-lg flex justify-between ">
            <div className="flex items-center">
                <div className=" text-3xl mr-3 text-[#FF3811]">
                    <SlCalender/>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className=" text-3xl mr-3 text-[#FF3811]">
                    <FaBlenderPhone/>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-xl font-semibold">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className=" text-3xl mr-3 text-[#FF3811]">
                    <FaSearchLocation/>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className="text-xl font-semibold">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;