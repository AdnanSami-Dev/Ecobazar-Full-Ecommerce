import React from 'react'
import Container from './Container'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

const Service = () => {
    const service = [
        {id:1, icon: <TbTruckDelivery /> , text: 'Free Shipping', text2: 'Free shipping on all your order'},
        {id:2, icon: <RiCustomerServiceLine /> , text: 'Customer Support 24/7', text2: 'Instant access to Support'},
        {id:3, icon: <TbShoppingBagCheck /> , text: '100% Secure Payment', text2: 'We ensure your money is save'},
        {id:4, icon: <BsBoxSeam /> , text: 'Money-Back Guarantee', text2: '30 Days Money-Back Guarantee'},
    ]
  return (
    <>
        <section>
            <Container>
                <div className="grid grid-cols-4 gap-1.5 p-10 shadow-[0_8px_24px_rgba(0,38,3,0.15)]">
                    {
                        service.map((serviceItem, index)=>(
                            <div key={index} className='flex gap-[17.19px]'>
                                <h3 className='text-[40px] text-[#00B207]'>{serviceItem.icon}</h3>
                                <div>
                                    <p className='text-[16px] leading-[120%] font-semibold font-pop text-[#1A1A1A]'>{serviceItem.text}</p>
                                    <p className='all-text font-normal text-[#999999] pt-2'>{serviceItem.text2}</p>
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

export default Service