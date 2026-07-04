import React from 'react'
import Banner from '../Banner'
import Service from '../Service'
import Categories from '../Categories'
import Products from '../Products'
import Deals from '../Deals'
import Featured from '../Featured'
import Latest from '../Latest'
import Client from '../Client'
import Brands from '../Brands'
import Follow from '../Follow'
import Subcribe from '../Subcribe'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Service></Service>
      <Categories></Categories>
      <Products></Products>
      <Deals></Deals>
      <Featured></Featured>
      <Latest></Latest>
      <Client></Client>
      <Brands></Brands>
      <Follow></Follow>
      <Subcribe></Subcribe>
    </>
  )
}

export default Home