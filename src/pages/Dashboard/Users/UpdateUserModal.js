import React, { useState } from 'react'
import Popup from '../../../component/Modal/Modal'
import { Icon } from '@iconify/react/dist/iconify.js'
import SelectField from '../../../component/SelectField/SelectField'

const roles = [
  { id: 1, name: 'User' },
  { id: 2, name: 'Admin' },
]

const UpdateUserModal = ({ open, closeModal }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0])


  return (
    <Popup open={open} closeModal={closeModal} title='submit review'>
      <div>
        <h1 className=' font-semibold text-xl mb-3 text-center'>Update User</h1>

        <form className='mt-10'>
          <div>
            <div className='flex h-12 border border-gray-400 mb-5'>
              <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                <Icon icon="mdi:user" className='text-2xl text-gray-500' />
              </div>
              <input className='h-full flex-grow outline-none p-2' placeholder='Name' />
            </div>
            <div className='flex h-12 border border-gray-400 mb-5'>
              <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                <Icon icon="ic:baseline-email" className='text-2xl text-gray-500' />
              </div>
              <input className='h-full flex-grow outline-none p-2' placeholder='Email' />
            </div>

            <div className='flex h-12 border border-gray-400 mb-5'>
              <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                <Icon icon="carbon:category" className='text-2xl text-gray-500' />
              </div>
              <div className='flex-grow'>
                <SelectField listItems={roles} selected={selectedRole} setSelected={setSelectedRole} />
              </div>
            </div>

            <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white w-full hover:bg-[#f9486c]'>Update</button>

          </div>
        </form>
      </div>
    </Popup>
  )
}

export default UpdateUserModal