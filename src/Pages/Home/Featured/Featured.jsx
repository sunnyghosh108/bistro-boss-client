import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40  py-20 px-36 pt-12'>
                <div>
                    <img  src={featuredImg} />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>What can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus ut maiores incidunt vero dolore ab sit, molestiae libero mollitia corporis numquam nemo voluptatibus, molestias quasi perspiciatis. Quisquam, rem enim.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;