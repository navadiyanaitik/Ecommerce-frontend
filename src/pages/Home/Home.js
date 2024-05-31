import React from 'react'
import Layout from '../../component/layout/layout'
import Header from '../../component/Header/Header'
import './Home.css'
import ProductCard from '../../component/Product-card/ProductCard'
import { MokeProductData } from '../../constant/mokeData'

const Home = () => {
    return (
        <Layout>
            <div className='home-container'>
                <section className='header-container mx-auto'>
                    <Header />
                </section>
                <section className='container !mt-10'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-medium mb-10' id='product-sec'>Featured Products</h1>
                    <div className='flex flex-wrap justify-between gap-2'>
                        {
                            MokeProductData.length > 0 &&
                            MokeProductData.map((item) => {
                                return <ProductCard data={item} />
                            })
                        }

                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home