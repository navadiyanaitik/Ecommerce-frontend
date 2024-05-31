import React, { useState } from 'react'
import Layout from '../../component/layout/layout'
import Stepper from '../../component/Stepper/Stepper'
import ShippingDetails from './ShippingDetails'
import ConfirmOrder from './ConfirmOrder'
import CardInfo from './CardInfo'

const paymentStepDetail = [
    {
        icon: 'fa-solid:shipping-fast',
        title: 'shopping details'
    },
    {
        icon: 'tabler:copy-check-filled',
        title: 'confirm order'
    },
    {
        icon: 'mdi:bank',
        title: 'payment'
    },
]

const Payment = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const NUMBER_OF_STEPS = 3
    const goToNextStep = () => setCurrentStep(prev => prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1);
    // const goToPreviousStep = () => setCurrentStep(prev => prev <= 0 ? prev : prev - 1);
    return (
        <Layout>
            <div>
                <div className='text-center my-10'>
                    <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} stepOptions={paymentStepDetail} />
                </div>
                {
                    currentStep === 0 &&
                    <div className='container'>
                        <ShippingDetails goToNextStep={goToNextStep} />
                    </div>
                }
                {
                    currentStep === 1 &&
                    <div className='container'>
                        <ConfirmOrder goToNextStep={goToNextStep} />
                    </div>
                }
                {
                    currentStep === 2 &&
                    <div className='container'>
                        <CardInfo goToNextStep={goToNextStep} />
                    </div>
                }
                {/* <div className='container'>
                    <ConfirmOrder />
                </div> */}
                {/* <div className='container'>
                    <CardInfo />
                </div> */}
            </div>

            {/* <section className="flex gap-10">
                <button
                    onClick={goToPreviousStep}
                    className="bg-blue-600  p-2 rounded-md"
                >
                    Previous step
                </button>
                <button
                    onClick={goToNextStep}
                    className="bg-blue-600  p-2 rounded-md"
                >
                    Next step
                </button>
            </section> */}
        </Layout>
    )
}

export default Payment