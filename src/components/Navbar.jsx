import React, { useRef, useState } from 'react'
import Container from './Container'
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { useOutSideClick } from '../hooks/outSideClick';

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
                <div className="flex justify-between py-3.25 ">
                    <div className=""> 
                        <p className='flex gap-2 items-center'><CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex gap-5">
                            <div ref={dropRef} className="dropdown">
                                <h2 onClick={()=> setOpen(!open)} className='flex items-center gap-1.5 select-none'>Eng <FaChevronDown /></h2>
                                {open && (
                                    <ul  className='absolute'>
                                    <li><a href="">Bng</a></li>
                                    <li><a href="">Spn</a></li>
                                    <li><a href="">Chi</a></li>
                                </ul>
                                )}
                            </div>
                            <div ref={dropRef2} className="dropdown">
                                <h2 onClick={()=> setShow(!show)} className='flex items-center gap-1.5 select-none'>USD <FaChevronDown /></h2>
                                {show && (
                                    <ul  className='absolute'>
                                    <li><a href="">TK</a></li>
                                    <li><a href="">EURO</a></li>
                                </ul>
                                )}
                            </div>
                        </div>
                        <div className="sign">
                            <a href="">Sign In / Sign Up</a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Navbar