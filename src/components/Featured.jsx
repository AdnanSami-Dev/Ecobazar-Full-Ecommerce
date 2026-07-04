import React, { useEffect, useState } from 'react'
import Container from './Container'
import { GoArrowRight } from "react-icons/go";
import s1 from '../assets/images/s1.png'
import axios from 'axios';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Featured = () => {
    const [products, setProducts] = useState([]);
        const [showAll, setShowAll] = useState(false);
    
        useEffect(()=>{
            axios.get('https://dummyjson.com/products?limit=100')
            .then(res => setProducts(res.data.products))
        },[])
    
        const visibleProducts = showAll ? products  : products .slice(0, 5);
  return (
    <>
        <section className='py-15'>
            <Container>
                <div className="headline flex justify-between items-center pb-8">
                    <h1 className='text-[32px] leading-[120%] font-semibold font-pop text-[#1A1A1A]'>Popular Products</h1>
                    <button onClick={() => setShowAll(!showAll)} className='flex items-center gap-3 text-[16px] leading-[150%] font-medium font-pop text-[#20B526] cursor-pointer'>{showAll ? "Show Less" : "View All"} <GoArrowRight /></button>
                </div>

                <div className="grid grid-cols-5 ">
                    {
                        visibleProducts.map((item, index)=>(
                            <div  key={item.id} className="border border-[#E6E6E6] rounded-[5px] group hover:border-[#2C742F] duration-300 hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)]">
                                <img src={item.thumbnail} alt="" className=''/>
                                <div className="p-3">
                                    <p className='text-[14px] leading-[150%] font-normal font-pop text-[#4D4D4D] group group-hover:text-[#2C742F] duration-300'>{item.title}</p>
                                    <div className="price flex justify-between">
                                        <div className="flex items-center gap-0.5">
                                            <p className='text-[16px] leading-[150%] font-medium text-[#1A1A1A] font-pop'>{item.price}</p>
                                            <p className='text-[16px] leading-[150%] font-medium text-[#999999] font-pop line-through'>{item.dprice}</p>
                                        </div>
                                        <div className="icon p-2.5 bg-[#F2F2F2] rounded-full">
                                            <HiOutlineShoppingBag className='text-[20px] '/>
                                        </div>
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

export default Featured