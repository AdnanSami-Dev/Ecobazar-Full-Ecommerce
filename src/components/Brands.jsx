import React from 'react'
import Container from './Container'
import b1 from '../assets/images/b1.png'
import b2 from '../assets/images/b2.png'
import b3 from '../assets/images/b3.png'
import b4 from '../assets/images/b4.png'
import b5 from '../assets/images/b5.png'
import b6 from '../assets/images/b6.png'

const Brands = () => {
  return (
    <>
        <section className='py-15'>
            <Container>
                <div className="flex">
                    <div className="flex">
                        <img src={b1} alt="" className='pr-20 border-r border-[#E6E6E6]'/>
                        <img src={b2} alt="" className='px-20 border-r border-[#E6E6E6]'/>
                        <img src={b3} alt="" className='px-20 border-r border-[#E6E6E6]'/>
                        <img src={b4} alt="" className='px-20 border-r border-[#E6E6E6]'/>
                        <img src={b5} alt="" className='px-20 border-r border-[#E6E6E6]'/>
                        <img src={b6} alt="" className='pl-20 '/>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Brands