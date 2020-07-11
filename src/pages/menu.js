import React from 'react'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'
import MenuCard from '../components/pieces/menu-card'
import items from '../data/menu-items.json'

const MenuPage = () => {
  return (
    <div>
      <SEO title="Menu | Keiko Ramen" />
      <div className="mb-48">
        <div className="relative bg-clear-top">
          <h1 className="text-center">Menu</h1>
          <Carousel />
          <div className="grid gap-10 gtc justify-center mt-8 xl:mx-48">
            {items.map(item => (
              <MenuCard name={item.name} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
