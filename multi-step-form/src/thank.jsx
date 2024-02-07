import React from 'react'
import check from '/icon-thank-you.svg'

function Thank(){
    return(
        <div className="thank flex-col justify-center items-center text-center">
            <div className="place-self-center justify-center">
            <div className='mb-8'>
                <img className='block m-auto' src={check}/>
             </div>
             <div className='lg:w-68 m-auto'>
             <h1 className='text-3xl mb-8 font-bold'>Thank you!</h1>
            <p className='text-gray-500'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please free to email us at support@loremgaming.com</p>
            </div>
            </div>
        </div>
    )
}
export default Thank;