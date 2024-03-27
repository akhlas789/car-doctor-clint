import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-5 rounded-md">
            <div className="hero-content flex-col md:flex-row">
                <div className=' md:w-1/2 relative mr-5'>
                    <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img2} className="w-1/2 absolute left-1/2 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='md:w-1/2 space-y-5 p-4'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;