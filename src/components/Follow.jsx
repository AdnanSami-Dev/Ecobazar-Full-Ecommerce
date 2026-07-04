import React from 'react'
import Container from './Container'
import ins1 from '../assets/images/ins1.png'
import ins2 from '../assets/images/ins2.png'
import ins3 from '../assets/images/ins3.png'
import ins4 from '../assets/images/ins4.png'
import l2 from '../assets/images/l2.png'
import { FaInstagram } from "react-icons/fa";

const Follow = () => {
    const latest = [
            {id:1, image: ins1, icon: <FaInstagram/>},
            {id:2, image: ins2, icon: <FaInstagram/>},
            {id:3, image: ins3, icon: <FaInstagram/>},
            {id:4, image: ins4, icon: <FaInstagram/>},
            {id:5, image: ins1, icon: <FaInstagram/>},
        ]
  return (
    <>
        <section className='pb-15'>
            <Container>

                <div className="headline">
                    <h2 className='text-[32px] leading-[120%] font-semibold font-pop text-[#1A1A1A] pb-8 text-center'>Follow us on Instagram</h2>
                </div>

                <div className="grid grid-cols-5 gap-6">
                    {
                        latest.map((latestItem, index)=>(
                            <div className=" ">
                                <div className="img relative group rounded-xl overflow-hidden">
                                    <img src={latestItem.image} alt="" className='w-full'/>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(43,87,46,0.8)]  opacity-0 group-hover:opacity-100 duration-300 cursor-pointer" >
                                        <h5 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] leading-[150%] font-medium font-pop text-[#FFFFFF]'>{latestItem.icon}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    </>
  )
}

export default Follow