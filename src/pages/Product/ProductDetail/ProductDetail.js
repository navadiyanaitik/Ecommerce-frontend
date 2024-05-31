import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Layout from '../../../component/layout/layout';
import CustomierReveiw from '../../../component/CustomerReveiws/CustomierReveiw';
import CustomerRating from '../../../component/CustomerRatings/CustomerRating';
import { useParams } from 'react-router-dom';
import { MokeProductData } from '../../../constant/mokeData';
import Popup from '../../../component/Modal/Modal';
import { Rating } from 'react-simple-star-rating';
import { fillColorArray } from '../../../constant/constant';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrow: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 1500,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState();
    const [openReviewModal, setOpenReviewModal] = useState(false);
    const [, setRating] = useState(0);
    const handleRating = (rate) => setRating(rate);

    useEffect(() => {
        const foundProduct = MokeProductData.find((product) => String(product.id) === id);
        setProductDetail(foundProduct);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCloseReveiwModal = () => {
        setOpenReviewModal(false)
    }

    return (
        <>
            <Layout>
                <div className='relative container my-10 px-4 xs:px-7'>
                    <div className='hidden md:block md:float-left w-full md:w-[58%] mb-5'>
                        {
                            productDetail?.image?.length > 0 &&
                            productDetail?.image.map(item => {
                                return (
                                    <div className='w-[49.5%] float-left mb-[1%] relative product-img'>
                                        <div className='h-0 pt-[133.33%] overflow-hidden relative border border-[#f5f5f6]'>
                                            <div className='absolute top-0 left-0 z-10 w-full h-full bg-no-repeat bg-cover will-change-transform transition-transform duration-[0.4s] hover:scale-[1.04]' style={{ backgroundImage: `url(${item}` }}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='block md:hidden'>
                        <Slider {...settings}>
                            {
                                productDetail?.image?.length > 0 &&
                                productDetail?.image.map(item => {
                                    return (
                                        <div>
                                            <div className='overflow-hidden mx-2'>
                                                <img src={item} alt='product-preview' className='transition-transform duration-[0.4s] hover:scale-[1.04]' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className='float-none md:float-left px-5 md:pl-7 md:w-[42%] my-5'>
                        <div className='pb-2.5'>
                            <h1 className='font-bold text-[#282c3f] text-xl xs:text-2xl leading-none'>{productDetail?.title}</h1>
                            <h1 className='pt-1.5 pr-2.5 pb-5 text-[#535665] text-sm xs:text-xl'>{productDetail?.description}</h1>
                            <div className='inline-flex cursor-pointer p-2 mb-3 border border-[#eaeaec] hover:border-[#535766] rounded-sm bg-white bg-opacity-80'>
                                <span className='text-white flex items-center text-xs font-bold pr-1'>
                                    <span className='text-[#282c3f] font-bold text-base'>{productDetail?.rating}</span>
                                    <Icon icon="material-symbols:star" className='ml-1 text-sm text-[#03a685]' />
                                </span>
                                <span className='w-px text-[#D4D5D7] ml-1.5'>|</span>
                                <span className='text-[#535766]  text-base ps-1 ml-2'>{productDetail?.ratingCount} Ratings</span>
                            </div>
                            <div>
                                <div className='mt-3.5 mb-1.5 text-xl xs:text-2xl font-bold leading-none'>
                                    <span className='text-xl font-bold text-[#282c3f] text-opacity-80 mr-3'>MRP</span>₹ {productDetail?.price}
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-5 xs:gap-0 flex-col xs:flex-row items-center mt-10 w-full lg:w-[84%]'>
                                    <button className='flex uppercase items-center cursor-pointer min-h-[22px] justify-center py-3.5 text-center rounded-md min-w-[108px] font-bold bg-[#ff3e6c] border border-[#ff3e6c] text-white flex-[3] w-full mr-[3%]'>
                                        add to bag
                                    </button>
                                    <button className='flex uppercase w-full lg:w-[34%] cursor-pointer items-center min-h-[22px] justify-center py-3.5 text-center rounded-md min-w-[108px] font-bold bg-white text-[#282c3f] border border-[#d4d5d9] hover:border-[#535766] flex-[3] lg:flex-[2]'>
                                        <Icon icon="solar:heart-linear" className='mr-2 text-[#282c3f] text-xl' />  Wishlist
                                    </button>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <h1 className=' font-semibold text-lg xs:text-xl pb-1.5'>Ratings <span><Icon icon="solar:stars-outline" className='text-xl text-[#282c3f]' /></span></h1>
                                <CustomerRating />
                            </div>
                            <div className='my-10'>
                                <button className='flex min-w-[150px] uppercase items-center cursor-pointer min-h-[22px] justify-center py-2.5 text-center rounded-md font-medium transition-all duration-100 ease-linear bg-white hover:bg-primary border border-[#ff3e6c] text-primary hover:text-white outline-none' onClick={() => { setOpenReviewModal(!openReviewModal) }}>
                                    submit review
                                </button>
                            </div>
                            <div className='hidden lg:block'>
                                <h1 className='text-lg xs:text-xl font-semibold mb-1.5'>Customer Reviews (25)</h1>
                                <CustomierReveiw />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='block lg:hidden clear-both px-5 md:px-0'>
                            <h1 className='text-lg xs:text-xl font-semibold mb-1.5'>Customer Reviews (25)</h1>
                            <CustomierReveiw />
                        </div>
                    </div>

                </div>
            </Layout>
            <Popup open={openReviewModal} closeModal={handleCloseReveiwModal} title='submit review'>
                <div>
                    <h1 className=' font-semibold text-xl mb-3'>Submit Review</h1>
                    <div>
                        <Rating
                            onClick={handleRating}
                            size={26}
                            transition
                            allowFraction
                            fillColorArray={fillColorArray}
                            initialValue={3.5}
                            disableFillHover
                        />
                    </div>
                    <div className='pt-5'>
                        <textarea cols={30} rows={5} className='w-full border-2 border-stone-400 focus:border-stone-600 rounded-md outline-none p-3' />
                    </div>
                    <div className='mt-5 flex justify-end'>
                        <button className='uppercase outline-none text-stone-600 hover:text-stone-800 font-semibold transition-all duration-100 p-2 mr-2' onClick={handleCloseReveiwModal}>cancel</button>
                        <button className='uppercase outline-none text-white bg-primary hover:bg-[#f9486c] rounded-md font-semibold transition-all duration-100 p-2' onClick={handleCloseReveiwModal}>submit</button>
                    </div>
                </div>
            </Popup>

        </>
    )
}

export default ProductDetail