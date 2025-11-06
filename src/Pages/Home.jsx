import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'


const Home = () => {
  const [products, setProducts] = useState([]);

  async function grtAllProducts() {
    const items = await axios.get('https://dummyjson.com/products')
    setProducts(items.data.products)
  }

  useEffect(() => {
    grtAllProducts()
  }, [])

  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {
          products?.map(item => <Card key={item.id} product={item} />)
        }
      </div>

    </div>
  )
}

export default Home
