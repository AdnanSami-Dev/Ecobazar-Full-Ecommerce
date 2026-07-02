import React from 'react'
import Container from './Container'
import footer from '../assets/images/footer.png'
import apple from '../assets/images/apple.png'
import master from '../assets/images/master.png'
import visa from '../assets/images/visa.png'
import discover from '../assets/images/discover.png'
import cart from '../assets/images/Cart.png'

const Footer = () => {

  const repetContent = [
    {id:1, text1: 'My Account', text2: 'My Account', text3: 'Order History', text4: 'Shoping Cart', text5: 'Wishlist'},
    {id:2, text1: 'Helps', text2: 'Contact', text3: 'Faqs', text4: 'Terms & Condition', text5: 'Privacy Policy'},
    {id:3, text1: 'Proxy', text2: 'About', text3: 'Shop', text4: 'Product', text5: 'Track Order'},
    {id:4, text1: 'Categories', text2: 'Fruit & Vegetables', text3: 'Meat & Fish', text4: 'Bread & Bakery', text5: 'Beauty & Health'},
  ]

  const pay = [
    {id:1, image: apple},
    {id:2, image: visa},
    {id:3, image: discover},
    {id:4, image: master},
    {id:5, image: cart}
  ]
  return (
    <>
      <section className='bg-[#1A1A1A] py-15'>
        <Container>
          <div className="flex gap-28">
            <div className="w-[25%]">
                <div className="img">
                  <img src={footer} alt="" />
                </div>
                <p className='all-text text-[#808080] font-normal py-4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className="num flex items-center gap-4">
                  <p className='all-text font-medium text-[#FFFFFF]'>(219) 555-0114</p>
                  <p className='text-[16px] text-[#808080] leading-[150%] font-pop'>or</p>
                  <p className='all-text font-medium text-[#FFFFFF]'>Proxy@gmail.com</p>
                </div>
            </div>
            <div className="w-[65%]">
              <div className="flex gap-32.25">
                {
                repetContent.map((repet, index)=>(
                  <div className="">
                    <h4 className='text-[16px] text-[#FFFFFF] leading-[150%] font-medium font-pop'>{repet.text1}</h4>
                    <div className="footer-ul pt-5">
                      <ul className='flex flex-col gap-3'>
                        <li><a href="">{repet.text2}</a></li>
                        <li><a href="">{repet.text3}</a></li>
                        <li><a href="">{repet.text4}</a></li>
                        <li><a href="">{repet.text5}</a></li>
                      </ul>
                    </div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-[#1A1A1A]'>
        <Container>
          <div className="flex justify-between py-7.25 border-t border-[#333333]">
            <p className='all-text text-[#808080] font-normal'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
            <div className="payments flex gap-2">
              {
                pay.map((payment, index)=>(
                  <div className="img">
                    <img src={payment.image} alt="payment" />
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer