import React from 'react'
import { Line } from 'rc-progress'
import { Icon } from '@iconify/react'



const CustomerRating = () => {
    return (
        <div>
            <div className='flex flex-col xs:flex-row md:flex-col lg:flex-row justify-center lg:items-center mt-5'>
                <div className='flex-col flex mb-5 lg:mb-0'>
                    <div className='flex'>
                        <span className='text-4xl xs:text-5xl text-[#282c3f]'>4.7</span>
                        <span className='mt-3 ml-2.5'><Icon icon="carbon:star-filled" className='text-2xl text-[#03a685]' /></span>
                    </div>
                    <div className='mt-3 text-sm text-[#282c3f]'>
                        105 Verified Buyers
                    </div>
                </div>
                <div className='hidden xs:block md:hidden lg:block h-[96px] ml-9 border-l border-[1.5px] border-[#eaeaec]'></div>
                <div className='progress-bar'>
                    <div className='flex xs:ml-10 md:ml-0 lg:ml-12'>
                        <div className='flex items-center text-[#a9abb3]'>
                            <span className='text-sm w-1.5'>5</span>
                            <Icon icon="material-symbols:star" className='mr-2 ml-1.5 text-[#a9abb3] text-sm' />
                        </div>
                        <Line strokeWidth={1} strokeColor='#14958f' trailColor='#f5f5f6' className='h-1 mt-2 w-[120px]' percent={62} />
                        <span className='text-xs  ml-2'>62</span>
                    </div>
                    <div className='flex xs:ml-10 md:ml-0 lg:ml-12'>
                        <div className='flex items-center text-[#a9abb3]'>
                            <span className='text-sm w-1.5'>4</span>
                            <Icon icon="material-symbols:star" className='mr-2 ml-1.5 text-[#a9abb3] text-sm' />
                        </div>
                        <Line strokeWidth={1} strokeColor='#14958f' trailColor='#f5f5f6' className='h-1 mt-2 w-[120px]' percent={28} />
                        <span className='text-xs  ml-2'>28</span>
                    </div>
                    <div className='flex xs:ml-10 md:ml-0 lg:ml-12'>
                        <div className='flex items-center text-[#a9abb3]'>
                            <span className='text-sm w-1.5'>3</span>
                            <Icon icon="material-symbols:star" className='mr-2 ml-1.5 text-[#a9abb3] text-sm' />
                        </div>
                        <Line strokeWidth={1} strokeColor='#72bfbc' trailColor='#f5f5f6' className='h-1 mt-2 w-[120px]' percent={8} />
                        <span className='text-xs  ml-2'>8</span>
                    </div>
                    <div className='flex xs:ml-10 md:ml-0 lg:ml-12'>
                        <div className='flex items-center text-[#a9abb3]'>
                            <span className='text-sm w-1.5'>2</span>
                            <Icon icon="material-symbols:star" className='mr-2 ml-1.5 text-[#a9abb3] text-sm' />
                        </div>
                        <Line strokeWidth={1} strokeColor='#fcb301' trailColor='#f5f5f6' className='h-1 mt-2 w-[120px]' percent={3} />
                        <span className='text-xs  ml-2'>3</span>
                    </div>
                    <div className='flex xs:ml-10 md:ml-0 lg:ml-12'>
                        <div className='flex items-center text-[#a9abb3]'>
                            <span className='text-sm w-1.5'>1</span>
                            <Icon icon="material-symbols:star" className='mr-2 ml-1.5 text-[#a9abb3] text-sm' />
                        </div>
                        <Line strokeWidth={1} strokeColor='#f16565' trailColor='#f5f5f6' className='h-1 mt-2 w-[120px]' percent={4} />
                        <span className='text-xs ml-2'>4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerRating