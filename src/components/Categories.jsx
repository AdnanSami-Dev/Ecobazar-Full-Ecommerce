import React, { useEffect, useState } from 'react'
import Container from './Container'
import { GoArrowRight } from "react-icons/go";
import s1 from '../assets/images/s1.png'
import axios from 'axios';

const Categories = () => {
    const Categorie =[
        {id:1, image: s1, text: 'Fresh Fruit'},
        {id:2, image: s1, text: 'Fresh Fruit'},
        {id:3, image: s1, text: 'Fresh Fruit'},
        {id:4, image: s1, text: 'Fresh Fruit'},
        {id:5, image: s1, text: 'Fresh Fruit'},
        {id:6, image: s1, text: 'Fresh Fruit'},
        {id:7, image: s1, text: 'Fresh Fruit'},
        {id:8, image: s1, text: 'Fresh Fruit'},
        {id:9, image: s1, text: 'Fresh Fruit'},
        {id:10, image: s1, text: 'Fresh Fruit'},
        {id:11, image: s1, text: 'Fresh Fruit'},
        {id:12, image: s1, text: 'Fresh Fruit'},
    ]

    const [categorie, setCategorie] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        axios.get('https://dummyjson.com/carts')
        .then(res => setCategorie(res.data.carts))
    },[])

    const visibleProducts = showAll ? categorie : categorie.slice(0, 12);
    
  return (
    <>
        <section className='pt-15 pb-12.5'>
            <Container>
                <div className="headline flex justify-between items-center pb-8">
                    <h1 className='text-[32px] leading-[120%] font-semibold font-pop text-[#1A1A1A]'>Popular Categories</h1>
                    <button onClick={() => setShowAll(!showAll)} className='flex items-center gap-3 text-[16px] leading-[150%] font-medium font-pop text-[#20B526] cursor-pointer'>{showAll ? "Show Less" : "View All"} <GoArrowRight /></button>
                </div>

                <div className="grid grid-cols-6 gap-6">
                    {
                        visibleProducts.map((cateItem, index)=>(
                            <div  key={cateItem.id} className="border border-[#E6E6E6] text-center rounded-[5px] group hover:border-[#2C742F] duration-300 hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)]">
                                <img src={cateItem.products[0].thumbnail} alt="" className='pt-4'/>
                                <p className='text-[18px] leading-[150%] font-medium font-pop text-[#1A1A1A] pt-4 pb-6 group group-hover:text-[#2C742F] duration-300'>{cateItem.products[0].title}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    </>
  )
}

export default Categories