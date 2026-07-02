import React, { useRef, useState } from 'react'
import Container from './Container'
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { useOutSideClick } from '../hooks/outSideClick';
import logo from '../assets/images/Logo.png'
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    let dropRef = useRef(null)
    let dropRef2 = useRef(null)

    useOutSideClick(dropRef, ()=> setOpen(false), open)
    useOutSideClick(dropRef2, ()=> setShow(false), show)

  return (
    <>
        <section className='border-b border-[#E5E5E5]'>
            <Container>
                <div className="flex items-center justify-between py-3.25">
                    <div className=""> 
                        <p className='flex gap-2 top-nav'><CiLocationOn className='w-3.75 h-4.5 text-[#666666]'/> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-5">
                            <div ref={dropRef} className="dropdown">
                                <h2 onClick={()=> setOpen(!open)} className='flex items-center gap-1.5 select-none top-nav'>Eng <FaChevronDown /></h2>
                                {open && (
                                    <ul  className='absolute'>
                                    <li><a href="" className='top-nav'>Bng</a></li>
                                    <li><a href="" className='top-nav'>Spn</a></li>
                                    <li><a href="" className='top-nav'>Chi</a></li>
                                </ul>
                                )}
                            </div>
                            <div ref={dropRef2} className="dropdown">
                                <h2 onClick={()=> setShow(!show)} className='flex items-center gap-1.5 select-none top-nav'>USD <FaChevronDown /></h2>
                                {show && (
                                    <ul  className='absolute'>
                                    <li><a href="" className='top-nav'>TK</a></li>
                                    <li><a href="" className='top-nav'>EURO</a></li>
                                </ul>
                                )}
                            </div>
                        </div>
                        <div className="sign whitespace-nowrap flex items-center">
                            <a href="" className='top-nav whitespace-nowrap'>Sign In / Sign Up</a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <section>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="img ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search flex items-center py-6">
                        <div className="relative">
                            <IoSearch className='absolute top-1/2 -translate-y-1/2 left-5 text-[15px] text-[#1A1A1A]'/>
                            <input type="text" placeholder='Search' className='outline-0 border border-[#E5E5E5] rounded-tl-md rounded-bl-md w-100 h-11.25 pl-11'/>
                        </div>
                        <div className="button">
                            <a href="" className='bg-[#00B207] py-3.25 px-6 text-[14px] leading-[120%] font-pop font-semibold text-[#FFFFFF] rounded-tr-md rounded-br-md relative -top-0.5'>Search</a>
                        </div>
                    </div>
                    <div className="items flex items-center">
                        <div className="heart pr-4 border-r">
                            <CiHeart className='text-[32px] text-[#1A1A1A]'/>
                        </div>
                        <div className="flex items-center gap-3 pl-4 relative">
                            <div className="shopping">
                                <HiOutlineShoppingBag className='text-[32px] text-[#1A1A1A] '/>
                                <p className='bg-[#2C742F] w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] font-medium font-pop text-white absolute -top-1 left-8'>2</p>
                            </div>
                            <div className="">
                                <h4 className='text-[11px] leading-[120%] font-normal font-pop text-[#4D4D4D]'>Shopping cart:</h4>
                                <p className='text-[14px] leading-[100%] font-medium text-[#1A1A1A] font-pop pt-1.75'>$57.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <section className='bg-[#333333]'>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="nav-buttons ">
                        <ul className='flex gap-8'>
                            <li><a href="" className=''>Home <IoIosArrowDown /></a></li>
                            <li><a href="">Shop <IoIosArrowDown /></a></li>
                            <li><a href="">Pages <IoIosArrowDown /></a></li>
                            <li><a href="">Blog <IoIosArrowDown /></a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-2 py-4">
                        <LuPhoneCall className='text-[28px] text-[#FFFFFF]'/>
                        <p className='all-text text-[#FFFFFF]'>(219) 555-0114</p>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Navbar