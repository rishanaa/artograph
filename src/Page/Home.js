import React from 'react'
import ArtProducts from '../Components/ArtProducts'
import CraftProducts from '../Components/CraftProducts'
import MainSection from '../Components/MainSection'
import HomeDecor from '../Components/HomeDecor'
import TrendingProducts from '../Components/TrendingProducts'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <MainSection/>
      <h3 style={{marginLeft:'20px'}}>Trending products</h3>
      <TrendingProducts/>
      <h3 style={{marginLeft:'20px'}}>Customised craft products</h3>
      <CraftProducts/>
      <h3 style={{marginLeft:'20px'}}>Art products</h3>
      <ArtProducts/>
      <h3 style={{marginLeft:'20px'}}>Home Decor</h3>
      <HomeDecor/>
      <h3 style={{marginLeft:'20px'}}>All categories</h3>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home