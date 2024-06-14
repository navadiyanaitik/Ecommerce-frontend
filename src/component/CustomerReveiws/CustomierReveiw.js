import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'


const CustomierReveiw = () => {
    return (
        <div className='mb-10'>
            <div className='py-5 border-b border-[#eaeaec]'>
                <div className='pl-9 relative'>
                    <div className='absolute left-0 top-1'>
                        <span className='bg-[#72bfbc] w-[22px] pl-1 text-[10px] leading-[14px] block relative font-bold text-white'>
                            4
                            <span className='absolute left-1.5 -top-px'>
                                <Icon icon="material-symbols:star" className='ml-1 text-xs text-white' />
                            </span>
                        </span>
                    </div>
                    <div className='text-sm xs:text-base'>Good product from last 1 yr and still same</div>
                </div>
                <div className='mt-3.5 pl-9'>
                    <span className='divider'>Faisal</span>
                    <span>30 Apr 2024</span>
                </div>
            </div>
            <div className='py-5 border-b border-[#eaeaec]'>
                <div className='pl-9 relative'>
                    <div className='absolute left-0 top-1'>
                        <span className='bg-[#72bfbc] w-[22px] pl-1 text-[10px] leading-[14px] block relative font-bold text-white'>
                            4
                            <span className='absolute left-1.5 -top-px'>
                                <Icon icon="material-symbols:star" className='ml-1 text-xs text-white' />
                            </span>
                        </span>
                    </div>
                    <div className='text-sm xs:text-base'>Good product from last 1 yr and still same</div>
                </div>
                <div className='mt-3.5 pl-9'>
                    <span className='divider'>Faisal</span>
                    <span>30 Apr 2024</span>
                </div>
            </div>
            <div className='py-5 border-b border-[#eaeaec]'>
                <div className='pl-9 relative'>
                    <div className='absolute left-0 top-1'>
                        <span className='bg-[#72bfbc] w-[22px] pl-1 text-[10px] leading-[14px] block relative font-bold text-white'>
                            4
                            <span className='absolute left-1.5 -top-px'>
                                <Icon icon="material-symbols:star" className='ml-1 text-xs text-white' />
                            </span>
                        </span>
                    </div>
                    <div className='text-sm xs:text-base'>Good product from last 1 yr and still same</div>
                </div>
                <div className='mt-3.5 pl-9'>
                    <span className='divider'>Faisal</span>
                    <span>30 Apr 2024</span>
                </div>
            </div>
            <Link to={'#'} className='font-semibold text-sm text-[#ff3f6c] mt-5 inline-block'>View all 25 reviews</Link>
        </div>
    )
}

export default CustomierReveiw