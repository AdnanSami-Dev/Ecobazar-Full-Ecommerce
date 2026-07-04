import React from 'react'
import Container from './Container'
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Subcribe = () => {
  return (
    <>
        <section className='bg-[#F7F7F7] py-10'>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="w-[32%]">
                        <h4 className='text-[24px] leading-[150%] font-semibold font-pop text-[#1A1A1A]'>Subcribe our Newsletter</h4>
                        <p className='all-text text-[#999999] font-normal pt-1'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="search flex items-center py-6">
                            <div className="relative">
                                <IoSearch className='absolute top-1/2 -translate-y-1/2 left-5 text-[15px] text-[#1A1A1A]'/>
                                <input type="text" placeholder='Your email address' className='outline-0 border border-[#E5E5E5] rounded-tl-[46px] rounded-bl-[46px] w-100 h-13 pl-11'/>
                            </div>
                            <div className="button ">
                                <a href="" className='bg-[#00B207] py-4 px-10 text-[14px] leading-[120%] font-pop font-semibold text-[#FFFFFF] rounded-[43px] relative -top-0.5 -left-4'>Subscribe</a>
                            </div>
                        </div> 
                        <div className=" flex items-center gap-2">
                            <div className="heart rounded-full group duration-500 cursor-pointer hover:bg-[#00B207] p-2.75">
                                <FaFacebookF className='text-[18px] text-[#4D4D4D] group-hover:text-[#FFFFFF] duration-500'/>
                            </div>
                            <div className="heart rounded-full group duration-500 cursor-pointer hover:bg-[#00B207] p-2.75">
                                <FaTwitter className='text-[18px] text-[#4D4D4D] group-hover:text-[#FFFFFF] duration-500'/>
                            </div>
                            <div className="heart rounded-full group duration-500 cursor-pointer hover:bg-[#00B207] p-2.75">
                                <FaPinterestP className='text-[18px] text-[#4D4D4D] group-hover:text-[#FFFFFF] duration-500'/>
                            </div>
                            <div className="heart rounded-full group duration-500 cursor-pointer hover:bg-[#00B207] p-2.75">
                                <FaInstagram className='text-[18px] text-[#4D4D4D] group-hover:text-[#FFFFFF] duration-500'/>
                            </div>
                        </div>
                    </div>
                    </div>
            </Container>
        </section>
    </>
  )
}

export default Subcribe