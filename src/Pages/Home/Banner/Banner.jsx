import banerimg1 from '../../../assets/images/banner/1.jpg'
import banerimg2 from '../../../assets/images/banner/2.jpg'
import banerimg3 from '../../../assets/images/banner/3.jpg'
import banerimg4 from '../../../assets/images/banner/4.jpg'
import banerimg5 from '../../../assets/images/banner/5.jpg'
import banerimg6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banerimg1} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banerimg2} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banerimg3} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banerimg4} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banerimg5} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banerimg6} className="w-full" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full bottom-0">
                    <div className='text-white space-y-7 w-8/12 px-20'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;