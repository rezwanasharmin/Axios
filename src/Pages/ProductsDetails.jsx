import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'


const ProductsDetails = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    async function grtAllProducts() {
        const items = await axios.get(`https://dummyjson.com/products/${id}`)
        setProducts(items.data)

    }
    console.log(products)

    useEffect(() => {
        grtAllProducts()
    }, [])
    return (
        <div>
            <div>
                <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5">
                    <a href="#">
                        <img className="rounded-t-lg mx-auto" src={products.thumbnail} alt />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{products.title}</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {Array.from({ length: Math.floor(products.rating) }).map((_, index) =>
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                )}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{products.rating}</span>
                        </div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${products.price}</span>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{products.description}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductsDetails
