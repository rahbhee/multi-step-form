import React from  'react';

function AddOns(){
    return(
        <>
        <h1 className="add font-bold mt-2 mb-2 pr-24 text-3x1">Pick add-ons</h1>
        <p className="plan-p text-gray-500 lg:text-base md:text-base ">Add-ons help enhance your gaming experience</p>
        <div className='info lg:flex-col items-center md:flex-col justify-between mt-6 lg:mt-12 md:mt-12'>
            <div className="add-div flex mb-4 pt-4 pb-4 lg:h-16 md:h-16 border rounded-lg border-solid items-center border-gray-300">
                <input type="checkbox" className="w-4 mr-4 ml-4"/>
                <div className="p-div">
                    <h3 className="text-sm font-semibold">Online service</h3>
                    <p className="text-gray-500">Access to mulitiplayer games</p>
                </div>
                <p className="add-p text-xs">+$1/mo</p>
            </div>
            <div className="add-div flex mb-4 pt-4 pb-4  lg:h-16 md:h-16 border rounded-lg border-solid items-center border-gray-300">
                <input type="checkbox"  className="w-4 mr-4 ml-4"/>
                <div  className="p-div">
                    <h3 className="text-sm font-semibold">Larger storage</h3>
                    <p className="text-gray-500">Extra 1TB of cloud save</p>
                </div>
                <p className="add-p text-xs">+$2/mo</p>
            </div>
            <div className="add-div flex pt-4 mb-4 pb-4  lg:h-16 md:h-16 border rounded-lg border-solid items-center border-gray-300">
                <input type="checkbox" className="w-4 mr-4 ml-4"/>
                <div className="p-div">
                    <h3 className="text-sm font-semibold">Customizable profile</h3>
                    <p className="text-gray-500">Custom theme on your profile</p>
                </div>
                <p className="add-p text-xs">+$1/mo</p>
            </div>
        </div>
        </>
    )
}
export default AddOns;