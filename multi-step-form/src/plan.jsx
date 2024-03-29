import React, {useState, useEffect} from 'react';
import arcade from '/icon-arcade.svg'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'


function Plans({isChecked, handleToggle}) {
 
    return (
        <>
        <h1 className="plan font-bold mt-2 mb-2 pr-24 text-3x1">Select your plan</h1>
        <p className="plan-p text-gray-500 lg:text-base md:text-base ">You have the option of monthly or yearly billing</p>
        <div className='info lg:flex items-center md:flex justify-between mt-4'>
            <div className="flex mb-4 lg:mb-12 pt-4 pb-4 lg:p-0 md:p-0 lg:flex-col md:flex-col lg:pl-4 md:pl-4 lg:pt-6 md:pt-6 border rounded-lg border-solid border-gray-300 lg:w-40 md:w-40 md:mr-4 lg:mr-4 lg:h-48 md:h-48">
                <div  className="mr-4 ml-4 lg:m-0 md:m-0"><img src={arcade}/></div>
                <div className="p-div lg:mt-12 md:mt-12">
                    <h3 className="text-sm font-semibold">Arcade</h3>
                    <p className="text-gray-500 text-xs">$9{isChecked ? "0/yr": "mo"}</p>
                    {isChecked && <p className="free">2 months free</p>}
                </div>
            </div>
            <div  className="flex mb-4 lg:mb-12 pt-4 pb-4 lg:p-0 md:p-0 lg:flex-col md:flex-col lg:pl-4 md:pl-4 lg:pt-6 md:pt-6 border rounded-lg border-solid border-gray-300 lg:w-40 md:w-40 md:mr-4 lg:mr-4 lg:h-48 md:h-48">
                <div className="mr-4 ml-4  lg:m-0 md:m-0"><img src={advanced}/></div>
                <div  className="p-div lg:mt-12 md:mt-12">
                    <h3 className="text-sm font-semibold">Advanced</h3>
                    <p className="text-gray-500 text-xs">$12{isChecked ? "0/yr": "mo"}</p>
                    {isChecked && <p className="free">2 months free</p>}
                </div>
            </div>
            <div className="flex pt-4 lg:mb-12 mb-4 pb-4 lg:p-0 md:p-0 lg:flex-col md:flex-col lg:pl-4 md:pl-4 lg:pt-6 md:pt-6 border rounded-lg border-solid border-gray-300 lg:w-40 md:w-40 md:mr-4 lg:mr-4 lg:h-48 md:h-48">
                <div className="mr-4 ml-4  lg:m-0 md:m-0"><img src={pro}/></div>
                <div className="p-div lg:mt-12 md:mt-12">
                    <h3 className="text-sm font-semibold">Pro</h3>
                    <p className="text-gray-500 text-xs">$15{isChecked ? "0/yr": "mo"}</p>
                   {isChecked && <p className="free">2 months free</p>}
                </div>
            </div>
        </div>
        <div className='flex mt-8 lg:mt-0 plan-btn'>
            <p className='mr-6'>Monthly</p>
            <div className='inline-block'>
            <label className='switch'>
            <input type='checkbox' checked={isChecked} onChange={handleToggle}/>
            <span className='slider'></span>
            </label>
            </div>
            <p className='ml-6'>Yearly</p>
        </div>
        </>
    )
  
}
export default Plans;