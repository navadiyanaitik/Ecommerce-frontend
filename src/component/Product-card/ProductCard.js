import React, { useState } from 'react'
import './ProductCard.css'
import { Icon } from '@iconify/react'
import Popup from '../Modal/Modal'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
    console.log("🚀 ~ ProductCard ~ data:", data)
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => {
        setOpenModal(!openModal);
    }

    return (
        <>
            <Link to={`/product/${data?.id}`} className='w-[210px] sm:max-w-none mx-auto xs:mx-2.5 mb-7 my- transition-all duration-300 relative group cursor-pointer'>
                <div className='overflow-hidden relative cursor-pointer'>
                    <div className='w-[210px] h-[280px]'>
                        <img src={data.image[0]} className='w-full h-full  group-hover:scale-[105%] transition-all duration-[0.8s]' alt='product' />
                    </div>
                    <div className='action-layer  absolute inset-y-0 right-0 py-3 px-2.5 flex flex-col group-hover:translate-x-0 translate-x-full transition-all duration-300 ease-in-out'>
                        <span className='group w-8 h-8 border bg-white flex justify-center items-center cursor-pointer mb-3 rounded-[50%] border-solid border-transparent'>
                            <Icon icon="ph:heart-light" className='text-xl text-[#fff] group-hover:text-[#FF9A8B]' />
                        </span>
                        <span className='group w-8 h-8 border bg-white flex justify-center items-center cursor-pointer mb-3 rounded-[50%] border-solid border-transparent'>
                            <Icon icon="ph:eye-light" className='text-lg text-[#fff] group-hover:text-[#FF9A8B]' onClick={handleModalOpen} />
                        </span>
                        <span className='group w-8 h-8 border mt-auto flex bg-white justify-center items-center cursor-pointer mb-3 rounded-[50%] border-solid border-transparent'>
                            <Icon icon="iconamoon:shopping-bag-thin" className='text-xl text-[#fff] group-hover:text-[#FF9A8B]' />
                        </span>
                    </div>
                    <div className='absolute bottom-2 left-2 inline-flex p-1.5 rounded-sm bg-black bg-opacity-80'>
                        <span className='text-white flex items-center text-xs border-r border-white font-bold pr-1'>

                            <Icon icon="material-symbols:star" className='ml-1 text-sm' />
                        </span>
                        <span className='text-white font-medium text-xs ps-1'>{data.ratingCount} Rating</span>
                    </div>
                </div>
                <div className='px-2.5 pb-1 mt-3 bg-white group-hover:shadow-[rgba(0,0,0,0.1)_0px_4px_12px]'>
                    <div className='product-detail relative '>
                        <div className='items-title text-base font-bold capitalize mb-1.5'>{data.title}</div>
                        <h3 className='text-sm text-[#535766] text-ellipsis overflow-hidden'>{data.subtitle}</h3>

                        <div className='price font-bold mt-2.5 mb-1.5 text-[#282c3f] text-sm'>&#8377;{data.price}</div>
                    </div>

                </div>
            </Link>
            <Popup open={openModal} setOpen={setOpenModal} />

        </>
    )
}

export default ProductCard