import React from 'react'
import Container from './Container'
import d1 from '../assets/images/d1.png'
import d2 from '../assets/images/d2.png'
import d3 from '../assets/images/d3.png'
import { GoArrowRight } from "react-icons/go";

const Deals = () => {
  return (
    <>
        <section className='pb-15'>
            <Container>
                <div className="flex gap-6">
                    <div className="relative">
                        <img src={d1} alt="offer" className='w-full'/>
                        <div className="absolute top-8.75 left-1/2 -translate-x-1/2 text-center w-full">
                            <h4 className='text-[14px] leading-[100%] font-medium font-pop text-white'>Best Deals</h4>
                            <h3 className='text-[40px] leading-[120%] font-semibold font-pop text-white pt-4 pb-2'>Sale of the Month</h3>
                            <div className="timer flex justify-center">
                                <div className="1">
                                    <h5 className='text-[24px] leading-[150%] font-normal font-pop text-[#FFFFFF]'>00</h5>
                                    <p className='text-[12px] leading-[100%] font-normal font-pop text-[#FFFFFF] pb-6'>Days</p>
                                </div>

                                <span className='px-2 text-[rgba(255,255,255,0.6)] text-[24px] leading-[150%] font-normal font-pop '>:</span>

                                <div className="1">
                                    <h5 className='text-[24px] leading-[150%] font-normal font-pop text-[#FFFFFF]'>02</h5>
                                    <p className='text-[12px] leading-[100%] font-normal font-pop text-[#FFFFFF] pb-6'>Hours</p>
                                </div>

                                <span className='px-2 text-[rgba(255,255,255,0.6)] text-[24px] leading-[150%] font-normal font-pop '>:</span>

                                <div className="1">
                                    <h5 className='text-[24px] leading-[150%] font-normal font-pop text-[#FFFFFF]'>18</h5>
                                    <p className='text-[12px] leading-[100%] font-normal font-pop text-[#FFFFFF] pb-6'>Mins</p>
                                </div>

                                <span className='px-2 text-[rgba(255,255,255,0.6)] text-[24px] leading-[150%] font-normal font-pop '>:</span>
                                
                                <div className="1">
                                    <h5 className='text-[24px] leading-[150%] font-normal font-pop text-[#FFFFFF]'>46</h5>
                                    <p className='text-[12px] leading-[100%] font-normal font-pop text-[#FFFFFF] pb-6'>Secs</p>
                                </div>
                            </div>
                            <a href="" className='items-center text-[14px] leading-[120%] font-medium font-pop text-[#00B207] py-3.5 px-8 rounded-[43px] bg-[#FFFFFF] inline-flex'>Shop Now <GoArrowRight/></a>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={d2} alt="offer" className='w-full'/>
                        <div className="absolute top-8.75 left-1/2 -translate-x-1/2 text-center w-full">
                            <h4 className='text-[14px] leading-[100%] font-medium font-pop text-white'>85% Fat Free</h4>
                            <h3 className='text-[40px] leading-[120%] font-semibold font-pop text-white pt-4 pb-3'>Low-Fat Meat</h3>
                            <h3 className='text-[18px] leading-[150%] font-normal font-pop text-white pb-[28.5px]'>Low-Fat Meat <span className='text-[20px] font-semibold text-[#FF8A00]'>$79.99</span></h3>
                            <a href="" className='items-center text-[14px] leading-[120%] font-medium font-pop text-[#00B207] py-3.5 px-8 rounded-[43px] bg-[#FFFFFF] inline-flex'>Shop Now <GoArrowRight/></a>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={d3} alt="offer" className='w-full'/>
                        <div className="absolute top-8.75 left-1/2 -translate-x-1/2 text-center w-full">
                            <h4 className='text-[14px] leading-[100%] font-medium font-pop text-white'>Summer Sale</h4>
                            <h3 className='text-[40px] leading-[120%] font-semibold font-pop text-white pt-4 pb-2'>100% Fresh Fruit</h3>
                            <h3 className='text-[18px] leading-[150%] font-normal font-pop text-white pb-6'>Up to <span className='text-[20px] font-semibold text-[#FCC900] bg-black py-1.5 px-3 rounded-[5px]'>64% OFF</span></h3>
                            <a href="" className='items-center text-[14px] leading-[120%] font-medium font-pop text-[#00B207] py-3.5 px-8 rounded-[43px] bg-[#FFFFFF] inline-flex'>Shop Now <GoArrowRight/></a>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
    </>
  )
}

export default Deals