import React, { useState } from 'react'
import Popup from '../../../component/Modal/Modal'
import { Icon } from '@iconify/react/dist/iconify.js'
import SelectField from '../../../component/SelectField/SelectField'
import categoryList from '../../../constant/category.json'


const roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Admin' },
]

const CreateProductModal = ({ open, closeModal }) => {
    const [files, setFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);


    const handleFileChange = (_files) => {
        const selectedFiles = _files
        setFiles([...files, ...selectedFiles]);
        const previews = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previews.push(e.target.result);
                if (previews.length === selectedFiles.length) {
                    setImagePreviews([...imagePreviews, ...previews]);
                }
            };
            reader.readAsDataURL(selectedFiles[i]);
        }
    }

    const handleRemoveFile = (index) => {
        const updatedFiles = [...files];
        const updatedPreviews = [...imagePreviews];
        updatedFiles.splice(index, 1);
        updatedPreviews.splice(index, 1);
        setFiles(updatedFiles);
        setImagePreviews(updatedPreviews);
    };



    return (
        <Popup open={open} closeModal={closeModal} modalStyle="!max-w-xl w-full">
            <div>
                <form className=''>
                    <div className='w-full'>
                        <h1 className='text-2xl font-medium mb-5'>Create Product</h1>
                        <div className='grid grid-cols-3 gap-x-3'>
                            <div className='col-span-3 mb-3'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-gray-500 transition-all duration-150 border-gray-400 rounded-md placeholder:text-gray-400' placeholder='Product Name' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Product name is required</p>
                            </div>

                            <div className='col-span-3 mb-3'>
                                <textarea className='w-full border-2 border-gray-400 focus:border-gray-500 rounded-md outline-none p-3' placeholder='Product Description' />
                                <p className='text-xs ps-1 text-danger opacity-0'>Product name is required</p>
                            </div>
                            <div className='mb-3'>
                                <input type='number' min={0} className='h-12 p-2 w-full outline-none border-2 focus:border-gray-500 transition-all duration-150 border-gray-400 rounded-md placeholder:text-gray-400' placeholder='Price' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Price is required</p>
                            </div>
                            <div className='mb-3'>
                                <input type='number' min={0} className='h-12 p-2 w-full outline-none border-2 focus:border-gray-500 transition-all duration-150 border-gray-400 rounded-md placeholder:text-gray-400' placeholder='Stock' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Stock is required</p>
                            </div>
                            <div className='mb-3'>
                                <div className='h-12'>
                                    <SelectField listItems={categoryList} selected={selectedCategory} setSelected={setSelectedCategory} fieldStyle='border-2 border-gray-400 rounded-lg' />
                                </div>
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Category is required</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type='file' hidden multiple id='product-file' onChange={(e) => { handleFileChange(e.target.files) }} />
                        <label htmlFor='product-file' className=' inline-block bg-primary p-2 text-white rounded-sm cursor-pointer text-sm'>Upload Files</label>
                    </div>
                    <div className='grid grid-cols-5 mt-5 gap-5'>
                        {
                            imagePreviews.length > 0 &&
                            imagePreviews.map((img, index) => {
                                return (
                                    <div className='w-24 h-28 relative group overflow-hidden' key={index}>
                                        <img src={img} className='w-full h-full object-cover group-hover:scale-105 duration-500 transition-all' />
                                        <span className='absolute inset-0 flex items-center justify-center transition-all  duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-red-800/50'>
                                            <Icon icon="material-symbols:delete" className='text-white text-2xl cursor-pointer' onClick={() => handleRemoveFile(index)} />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-end mb-5 mt-8'>
                        <button type='button' className='uppercase text-sm px-5 mr-3 flex items-center outline-none bg-white text-danger rounded-md font-semibold transition-all duration-100 p-2' onClick={closeModal} >
                            cancel
                        </button>
                        <button type='button' className='uppercase text-sm flex px-5 items-center outline-none text-white bg-primary rounded-md font-semibold transition-all duration-100 p-2' onClick={closeModal} >
                            Create
                        </button>
                    </div>

                </form>
            </div>
        </Popup>
    )
}

export default CreateProductModal