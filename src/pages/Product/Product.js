import React, { Fragment, useState } from 'react';
import './Product.css';
import Layout from '../../component/layout/layout';
import { Checkbox } from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { fillColorArray } from '../../constant/constant';
import { Rating } from 'react-simple-star-rating';
import ProductCard from '../../component/Product-card/ProductCard';
import TooltipSlider from '../../component/TooltipHandler/TooltipHandler';
import { MokeProductData } from '../../constant/mokeData';
import ReactPaginate from 'react-paginate';

const categories = ['shoes', 't-shirt', 'watch', 'jeans'];

const Product = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [, setRating] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const itemsPerPage = 6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = MokeProductData.slice(itemOffset, endOffset);
    console.log("🚀 ~ Product ~ currentItems:", currentItems)
    const pageCount = Math.ceil(MokeProductData.length / itemsPerPage);

    const handleRating = (rate) => setRating(rate);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % MokeProductData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    const handleCategoryChange = (val, category) => {
        if (val) {
            setSelectedCategories([...selectedCategories, category]); // Add to selected
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category)); // Remove from selected
        }
    }
    return (
        <Layout>
            <section className='container'>
                {/* <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-medium !my-8' id='product-sec'>Products</h1> */}
                <div className='flex justify-start mb-5'>
                    <div className={clsx(
                        'max-w-[270px] fixed inset-y-0 lg:relative -ml-[270px] lg:ml-0 w-full bg-white z-30 shadow-xl lg:shadow-none overflow-auto transition-all duration-200 ease-in-out p-4 border-r border-[#ced4da]',
                        isFilterOpen && '  ml-0'
                    )}>
                        <div className='mb-8'>
                            <div className='mb-3'>Price</div>
                            {/* <Slider
                                range
                                allowCross={false}
                                defaultValue={[0, 20]}
                                className='ml-4 max-w-[80%] custom-slider'
                                onChange={log}

                            /> */}
                            <TooltipSlider
                                range
                                min={1}
                                max={1000}
                                defaultValue={[3, 10]}
                                tipFormatter={(value) => `₹${value}`}
                                className='ml-4 max-w-[80%] custom-slider'
                                overlayStyle={{ background: '#ff477e' }}

                            />
                        </div>
                        <div className='mb-8'>
                            <div className='mb-3'>Categories</div>
                            <div className='ml-3'>
                                {
                                    categories.map((item, index) => {
                                        return (
                                            <div className='flex items-center mb-4' key={index}>
                                                <Checkbox checked={selectedCategories.includes(item)} name={item} onChange={(e) => { handleCategoryChange(e, item) }} as={Fragment}>
                                                    {({ checked, disabled }) => (
                                                        <span
                                                            className={clsx(
                                                                'size-4 rounded border relative inline-flex justify-center items-center select-none',
                                                                !checked && 'bg-white',
                                                                checked && !disabled && 'bg-primary',
                                                                checked && disabled && 'bg-gray-500',
                                                                disabled && 'cursor-not-allowed opacity-50'
                                                            )}
                                                        >
                                                            <Icon icon="basil:check-solid" className={clsx('stroke-white', checked ? 'opacity-100 text-white' : 'opacity-0')} />
                                                        </span>
                                                    )}
                                                </Checkbox>
                                                <span className='ml-2 text-sm capitalize select-none'>{item}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div className='mb-3'>Customer Reviews</div>
                            <div className='flex items-center ml-3'>
                                <Rating
                                    onClick={handleRating}
                                    size={26}
                                    transition
                                    allowFraction
                                    fillColorArray={fillColorArray}
                                    initialValue={3.5}
                                    disableFillHover
                                />
                                <button className='ml-5 bg-white border text-primary font-medium rounded-md px-2 py-0.5 border-primary'>Go</button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={`bg-black bg-opacity-20 fixed inset-0 transition-all duration-150 ease-in z-20 ${isFilterOpen ? 'block' : 'hidden'}`} onClick={() => { setIsFilterOpen(false) }} />
                    <div className={`flex-grow w-full sm:w-auto p-5 sm:p-8`}>
                        <div className='flex items-center mb-10 lg:hidden'>
                            <span className='mx-2.5 grid place-items-center bg-primary w-8 h-8 sm:w-10 sm:h-10 rounded-full' onClick={() => { setIsFilterOpen(!isFilterOpen) }} >
                                <Icon icon="fluent:filter-12-filled" className='text-base sm:text-xl text-white' />
                            </span>
                            <div className='flex-grow ps-3'>
                                <h1 className='sm:text-center text-2xl font-semibold'>Products</h1>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between gap-2'>
                            {
                                currentItems.length > 0 &&
                                currentItems.map((item) => {
                                    console.log("🚀 ~ currentItems.map ~ item:", item)
                                    return <ProductCard data={item} />
                                })
                            }
                        </div>
                        <div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="previous"
                                renderOnZeroPageCount={null}
                                className='flex justify-center'
                                pageClassName='inline-flex rounded-sm justify-center items-center w-8 h-8 mx-1.5 border border-[#ced4da] text-stone-700 bg-white'
                                activeClassName='!text-primary border-primary'
                                previousClassName="bg-primary border border-primary rounded-sm text-white grid place-items-center px-2 h-8 cursor-pointer"
                                nextClassName="bg-primary border border-primary rounded-sm text-white grid place-items-center px-2 h-8 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Product