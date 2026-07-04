import React from 'react'
import Container from './Container'
import l1 from '../assets/images/l1.png'
import l2 from '../assets/images/l2.png'
import l3 from '../assets/images/l3.png'
import { MdOutlineDiscount } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GoArrowRight } from 'react-icons/go'

const Latest = () => {
    const latest = [
        {id:1, image: l1, text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.', date: '18', month: 'NOV'},
        {id:2, image: l2, text: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,', date: '29', month: 'JAN'},
        {id:3, image: l3, text: 'Maecenas blandit risus elementum mauris malesuada.', date: '21', month: 'FEB'},
    ]
  return (
    <>
        <section className='pb-15'>
            <Container>

                <div className="headline">
                    <h2 className='text-[32px] leading-[120%] font-semibold font-pop text-[#1A1A1A] pb-8 text-center'>Latest News</h2>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        latest.map((latestItem, index)=>(
                            <div className="shadow-[0_8px_24px_rgba(0,38,3,0.15)] ">
                                <div className="img relative">
                                    <img src={latestItem.image} alt="" />
                                    <div className="absolute bottom-6 left-6 bg-[#FFFFFF] px-3.75 pb-2.5 pt-1.5 rounded-sm text-center">
                                        <h5 className='text-[20px] leading-[150%] font-medium font-pop text-[#1A1A1A]'>{latestItem.date}</h5>
                                        <p lassName='text-[12px] leading-[100%] font-medium font-pop text-[#808080]'>{latestItem.month}</p>
                                    </div>
                                </div>
                                <div className="contain p-6 border border-[#E6E6E6]">
                                    <div className="icon-text flex gap-4 pb-2">
                                        <p className='flex items-center gap-1 all-text text-[#4D4D4D] font-normal'><MdOutlineDiscount /> Food</p>
                                        <p className='flex items-center gap-1 all-text text-[#4D4D4D] font-normal'><FaRegUser /> By Admin</p>
                                        <p className='flex items-center gap-1 all-text text-[#4D4D4D] font-normal'><FaRegMessage /> 65 Comments</p>
                                    </div>
                                    <p className='text-[18px] leading-[150%] font-medium font-pop hover:text-[#2C742F] duration-500 text-[#1A1A1A] pb-5'>{latestItem.text}</p>
                                    <button className='flex items-center gap-3 text-[16px] leading-[150%] font-medium font-pop text-[#20B526] cursor-pointer'>Read More <GoArrowRight /></button>
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

export default Latest