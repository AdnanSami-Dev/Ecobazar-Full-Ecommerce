import React from 'react'
import Container from './Container'
import Banner1 from '../assets/images/banner1.jpg'
import Banner2 from '../assets/images/banner2.png'
import Banner3 from '../assets/images/banner3.png'


const Banner = () => {
  return (
    <>
        <section>
          <Container>
            <div className="flex gap-6 py-6">
              <div className="w-[67.5%]">
                <img src={Banner1} alt="" className='rounded-xl'/>
              </div>
              <div className="w-[33.5%] flex flex-col gap-5">
                <div className="">
                  <img src={Banner2} alt="" />
                </div>
                <div className="">
                  <img src={Banner3} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </section>
    </>
  )
}

export default Banner