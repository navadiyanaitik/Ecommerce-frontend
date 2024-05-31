import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Stepper = ({ currentStep, numberOfSteps, stepOptions }) => {
    const activeColor = (index) => currentStep >= index ? 'bg-primary' : 'bg-gray-500'
    const activeIconColor = (index) => currentStep >= index ? 'text-primary' : 'text-gray-500'
    const isFinalStep = (index) => index === numberOfSteps - 1
    return (
        <div className="inline-flex items-center">
            {Array.from({ length: numberOfSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    <div className={`w-20 xs:w-28 md:w-32 min-h-16 p-1 xs:p-2`}>
                        <Icon icon={stepOptions[index].icon} className={`${activeIconColor(index)} text-xl`} />
                        <div className='capitalize text-xs md:text-sm'>{stepOptions[index].title}</div>
                    </div>
                    {isFinalStep(index) ? null : <div className={`w-10 xs:w-16 md:w-24 h-0.5 ${activeColor(index + 1)}`}></div>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Stepper