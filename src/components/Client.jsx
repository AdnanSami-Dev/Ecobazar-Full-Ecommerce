import React from 'react'
import Container from './Container'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import c2 from '../assets/images/c2.png'
import c1 from '../assets/images/c1.png'
import c3 from '../assets/images/c3.png'
import c4 from '../assets/images/c4.png'
import { IoIosStar } from "react-icons/io";

const Client = () => {
    const client = [
        {id:1, profile: c1, text:'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', name: 'Robert Fox' },
        {id:2, profile: c3, text:'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', name: 'Dianne Russell' },
        {id:3, profile: c4, text:'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', name: 'Eleanor Pena' },
    ]
  return (
    <>
        <section className='bg-[#F2F2F2] py-15'>
            <Container>
                <div className="headline flex justify-between items-center pb-8">
                    <h1 className='text-[32px] leading-[120%] font-semibold font-pop text-[#1A1A1A]'>Client Testimonials</h1>
                    <div className="arrows flex items-center gap-3">
                        <a href="" className='text-[15px] p-4 bg-[#FFFFFF] rounded-full border border-[#E6E6E6] hover:bg-[#00B207] hover:text-[#FFFFFF] duration-300'><FaArrowLeftLong/></a>
                        <a href="" className='text-[15px] p-4 bg-[#FFFFFF] rounded-full border border-[#E6E6E6] hover:bg-[#00B207] hover:text-[#FFFFFF] duration-300'><FaArrowRightLong/></a>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        client.map((clientDetail, index)=>(
                            <div className="p-6 bg-[#FFFFFF] rounded-lg">
                                <img src={c2} alt="" />
                                <p className='all-text font-normal text-[#000000] pt-4'>{clientDetail.text}</p>
                                <div className="client flex justify-between items-center">
                                    <div className="flex gap-3 items-center pt-4">
                                        <img src={clientDetail.profile} alt="" />
                                        <div className="name">
                                            <h5 className='text-[16px] leading-[150%] font-medium font-pop text-[#1A1A1A]'>{clientDetail.name}</h5>
                                            <p className='all-text font-normal text-[#999999]'>Customer</p>
                                        </div>
                                    </div>
                                    <div className="icons flex gap-px">
                                        <IoIosStar className='text-[20px] text-[#FF8A00]'/>
                                        <IoIosStar className='text-[20px] text-[#FF8A00]'/>
                                        <IoIosStar className='text-[20px] text-[#FF8A00]'/>
                                        <IoIosStar className='text-[20px] text-[#FF8A00]'/>
                                        <IoIosStar className='text-[20px] text-[#FF8A00]'/>
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

export default Client