import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import ComboBox from '../../component/ComboBox/ComboBox'
import countryList from '../../constant/country.json'


const ShippingDetails = ({ goToNextStep }) => {
    const [countryQuery, setCountryQuery] = useState('')
    const [selectedCountry, setSelectedCountry] = useState()

    const filteredCountry =
        countryQuery === ''
            ? countryList
            : countryList.filter((person) => {
                return person.name.toLowerCase().includes(countryQuery.toLowerCase())
            })


    return (
        <div className='max-w-96 mx-auto p-5'>
            <h1 className='capitalize text-center text-xl font-medium pb-6 border-b-2 border-stone-300'>Shipping details</h1>
            <form className='mt-10'>
                <div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="typcn:home" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='address' />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="clarity:building-solid" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='city' />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="mdi:location" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='pincode' />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="ic:baseline-phone" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='phone number' />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="zondicons:network" className='text-2xl text-gray-500' />
                        </div>
                        <div className='flex-grow'>
                            <ComboBox setSelected={setSelectedCountry} selected={selectedCountry} setQuery={setCountryQuery} filteredVal={filteredCountry} placeholder="Country" />
                        </div>
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="zondicons:network" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='State' />
                    </div>
                    <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white w-full hover:bg-[#f9486c]' onClick={() => goToNextStep()}>Countinue</button>

                </div>
            </form>
        </div>
    )
}

export default ShippingDetails