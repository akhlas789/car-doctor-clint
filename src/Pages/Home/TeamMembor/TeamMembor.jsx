import teamImg1 from '../../../assets/images/team/1.jpg'
import teamImg2 from '../../../assets/images/team/2.jpg'
import teamImg3 from '../../../assets/images/team/3.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TeamMembor = () => {
    return (
        <div className="">
            <div className="mb-5 space-y-6">
                <h3 className="text-center text-2xl font-bold text-orange-600">Team</h3>
                <h1 className="text-center text-5xl font-bold">Meet Our Team</h1>
                <p className="text-center text-pretty mb-5">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card  bg-base-100 shadow-xl mt-5 ">
                    <figure className="px-10 pt-10 h-[150px]">
                        <img src={teamImg1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body flex items-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <div className="card-actions flex items-center justify-center">
                            <p className="text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                        <div className='flex gap-2 font-bold text-xl text-green-700'>
                            <FaFacebook/>
                            <FaSquareXTwitter/>
                            <FaLinkedin/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl mt-5 ">
                    <figure className="px-10 pt-10 h-[150px]">
                        <img src={teamImg2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body flex items-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <div className="card-actions flex items-center justify-center">
                            <p className="text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                        <div className='flex gap-2 font-bold text-xl text-green-700'>
                            <FaFacebook/>
                            <FaSquareXTwitter/>
                            <FaLinkedin/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl mt-5 ">
                    <figure className="px-10 pt-10 h-[150px]">
                        <img src={teamImg3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body flex items-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <div className="card-actions flex items-center justify-center">
                            <p className="text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                        <div className='flex gap-2 font-bold text-xl text-green-700'>
                            <FaFacebook/>
                            <FaSquareXTwitter/>
                            <FaLinkedin/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center mb-20 mt-10">
                <button className="btn btn-outline  text-[#FF3811]  ">More Services</button>
            </div>
        </div>
    );
};

export default TeamMembor;