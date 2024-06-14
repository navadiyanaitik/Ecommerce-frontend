import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import clsx from 'clsx'
import React from 'react'

const Popup = ({ open, closeModal, children, modalStyle }) => {

    return (
        <Transition appear show={open}>
            <Dialog as="div" className="relative z-20 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-400 bg-opacity-50">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className={clsx(modalStyle, "w-full max-w-md rounded-xl bg-white p-4 xs:p-6 relative")}>
                                <div className='text-2xl text-black inline-block absolute top-3 right-5 cursor-pointer' onClick={closeModal}><Icon icon="material-symbols:close" /></div>
                                <div>
                                    {children}
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Popup