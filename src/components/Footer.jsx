import React from 'react'
import logo from '../assets/clip.png'
import { FacebookIcon, InstagramIcon,YoutubeIcon } from 'lucide-react';
function Footer() {
  return (
    <footer className='padded bg-dRed py-20 text-white '>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-y-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt='ABM Productions logo' className='w-15' />
                        <h3 className='font-alex'>ABM Productions</h3>
                    </div>
                    
                    <ul className='flex p-0 gap-4 flex-col lg:flex-row '>
                        <li>
                            <a href="">Engagements</a>
                        </li>
                        <li>
                            <a href="">Testimonials</a>
                        </li>
                        <li>
                            <a href="">Our Services</a>
                        </li>
                        <li>
                            <a href="">Coaching</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3>Contact us</h3>
                    <div>
                        <label htmlFor="Email" className='flex gap-4 flex-col md:flex-row mb-4'>
                            <input type="text" placeholder='Email' className='bg-white text-black py-2 pl-3 pr-8 rounded-sm outline-none md:w-[50%]'/>
                            <button className='btn bg-white text-dRed'>Contact us</button>
                        </label>
                        <p className='text-sm'>Developing dynamic praises together</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-t-white flex lg:justify-between lg:items-center flex-col lg:flex-row pt-8 gap-y-8'>
                <div className='flex gap-3'>
                    <InstagramIcon size={30} className='text-white hover:cursor-pointer'/>
                    <FacebookIcon size={30} className='text-white hover:cursor-pointer'/>
                    <YoutubeIcon size={30} className='text-white hover:cursor-pointer'/>
                </div>
                <div>
                    <p className='italic'>@2025 ABM Productions. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
