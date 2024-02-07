import React from  'react';

function FinishUp({isChecked, setPage}){
   const changePlan = () => setPage(1)
    return(
        <>
        <h1 className="add font-bold mt-2 mb-2 pr-24 text-3x1">Finishing up</h1>
        <p className="plan-p text-gray-500 lg:text-base md:text-base ">Double-check everything looks OK before confirming</p>
        <div className='lg:flex-col items-center md:flex-col justify-between h-72 lg:mt-8 md:mt-8'>
            <div className="div flex mb-4 pt-8 items-center">
                <div className="p-div ml-6">
                    <h3 className="text-sm font-semibold">Arcade (Monthly)</h3>
                    <button className="text-gray-500 lg:mt-4 text-xs underline" onClick={changePlan}>Change</button>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$9{isChecked ? "0/yr": "mo"}</p>
            </div>
            <div className="w-11/12 m-auto mt-10 bg-gray-300 line"></div>
            <div className="add-div h-0 flex mb-4 pt-4 pb-4 md:h-16 items-center">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Online service</p>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$1{isChecked ? "0/yr": "mo"}</p>
            </div>
            <div className="add-div h-0 flex items-center">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Online service</p>
                </div>
                <p id='fin-p' className="add-p text-xs font-semibold">+$2{isChecked ? "0/yr": "mo"}</p>
            </div>
        </div>
        <div className="flex total items-center border-gray-300">
                <div className="p-div ml-6">
                    <p className="text-gray-500 text-xs">Total (per month)</p>
                </div>
                <p id='add-p' className="add-p fin-p text-base font-semibold">{isChecked ? "$120/yr": "+$12/mo"}</p>
        </div>
        </>
    )
}
export default FinishUp;