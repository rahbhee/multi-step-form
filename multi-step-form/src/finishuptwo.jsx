import React from  'react';

function FinishUpTwo(){
    return(
        <>
        <h1 className="add font-bold mt-2 mb-2 pr-24 text-3x1">Finishing up</h1>
        <p className="plan-p text-gray-500 lg:text-base md:text-base ">Double-check everything looks OK before confirming</p>
        <div className='info lg:flex-col items-center md:flex-col justify-between mt-6 lg:mt-12 md:mt-12'>
            <div className="add-div flex h-2 mb-4 pt-8 lg:h-16 md:h-16 items-center">
                <div className="p-div ml-6">
                    <h3 className="text-sm font-semibold">Arcade (Monthly)</h3>
                    <p className="text-gray-500 lg:mt-4 text-xs underline">Change</p>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$90/yr</p>
            </div>
            <div className="w-11/12 m-auto mt-10 bg-gray-300 line"></div>
            <div className="add-div h-0 flex mb-4 pt-4 pb-4 md:h-16 items-center">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Online service</p>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$10/yr</p>
            </div>
            <div className="add-div h-0 flex mb-4 pb-6 items-center">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Online service</p>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$20/yr</p>
            </div>
        </div>
        <div className="add-div flex mb-4 pb-4 lg:h-16 md:h-16 items-center border-gray-300">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Total (per month)</p>
                </div>
                <p id='add-p' className="add-p fin-p text-base font-semibold">+$120/yr</p>
        </div>
        <div className="desktop-btn hidden lg:flex md:flex md:hidden lg:justify-between md:justify-between">
                 <p>Go back</p>
                 <button id="next" className="rounded-lg">Confirm</button>
        </div>
        </>
    )
}
export default FinishUpTwo;