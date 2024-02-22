import React from 'react';
import profile from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className=" bg-white mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} className="max-w-lg rounded-lg ml-24" />
                <div className='mr-24'>
                    <h1 className="text-6xl font-bold">One Step <br /> Closer to Your <br /> <span className='text-[#c47efe]'>Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn  hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500 text-white ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;