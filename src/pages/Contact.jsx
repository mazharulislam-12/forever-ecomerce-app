import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t '>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col sm:flex-row justify-center gap-10 mb-28'>
                <img className='w-full max-w-[480px] ' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-center gap-6 '>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>Mymenshingh, Dhaka -1280</p>
                    <p className='text-gray-500'>Tel: ++801621342194 Email: mazharul@gmail.com </p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
                </div>
            </div>

            <NewsLetterBox/>
            
        </div>
    );
};

export default Contact;