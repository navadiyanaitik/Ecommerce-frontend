import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardInfo = () => {
    const [card, setCard] = useState({
        cardno: '',
        cardtype: 'far fa-credit-card',
        expirydt: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.stopPropagation();
        navigate('/payment_success')
    }

    const onChange = (e) => {
        var cartype_new = cardnumber(e.target.value)
        setCard({
            ...card,
            cardno: e.target.value,
            cardtype: cartype_new
        })
    }

    const cardnumber = (inputtxt) => {
        var matches = inputtxt.match(/(\d+)/)
        var cardno = ''
        if (matches) {
            cardno = inputtxt.split(' - ').join('')
        }
        var cardtype1 = card.cardtype
        //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
        var visa = /^(?:4[0-9]{2}?)$/
        var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/
        var amexpRegEx = /^(?:3[47][0-9]{3})$/
        var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/
        if (visa.test(cardno) === true) {
            //eg:4651970022334445
            cardtype1 = 'far fa fa-3x fa-cc-visa  carddetail-cardtype'
        } else if (mastercardRegEx.test(cardno) === true) {
            cardtype1 = 'far fa fa-3x fa-cc-mastercard carddetail-cardtype'
        } else if (amexpRegEx.test(cardno) === true) {
            cardtype1 = 'far fa fa-3x fa-cc-amex carddetail-cardtype'
        } else if (discovRegEx.test(cardno) === true) {
            cardtype1 = 'far fa fa-3x fa-cc-discover carddetail-cardtype'
        }
        return cardtype1
    }

    const cc_format = (value) => {
        const v = value.replace(/[^0-9]/gi, '').substr(0, 16)

        const parts = []
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4))
        }
        return parts.length > 1 ? parts.join(' - ') : value
    }
    const expriy_format = (value) => {
        const expdate = value
        const expDateFormatter =
            expdate.replace(/\//g, '').substring(0, 2) +
            (expdate.length > 2 ? '/' : '') +
            expdate.replace(/\//g, '').substring(2, 4)

        return expDateFormatter
    }
    const onChangeExp = (e) => {
        setCard({
            ...card,
            expirydt: e.target.value
        })
    }
    return (
        <div className='max-w-96 mx-auto p-5'>
            <h1 className='capitalize text-center text-xl font-medium pb-6 border-b-2 border-stone-300'>Shipping details</h1>
            <form className='mt-10'>
                <div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="f7:creditcard-fill" className='text-2xl text-gray-500' />
                        </div>
                        <input
                            className='h-full flex-grow outline-none p-2'
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            data-mask="0000 0000 0000 0000"
                            value={cc_format(card.cardno)}
                            onChange={onChange}
                            onKeyDown={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault()
                                }
                            }}
                        />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="lets-icons:date-range" className='text-2xl text-gray-500' />
                        </div>
                        <input
                            className='h-full flex-grow outline-none p-2'
                            placeholder="mm / yy"
                            onChange={onChangeExp}
                            value={expriy_format(card.expirydt)}
                        />
                    </div>
                    <div className='flex h-12 border border-gray-400 mb-5'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="material-symbols:key" className='text-2xl text-gray-500' />
                        </div>
                        <input type='password'
                            className='h-full flex-grow outline-none p-2'
                            data-mask="000"
                            placeholder='CVV'
                            maxlength="3"
                            pattern="[0-9][0-9][0-9]"
                            onKeyDown={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault()
                                }
                            }}

                        />
                    </div>
                    <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white w-full hover:bg-[#f9486c]' onClick={handleSubmit}>payment - &#8377;32000</button>

                </div>
            </form>
        </div>
    )
}

export default CardInfo