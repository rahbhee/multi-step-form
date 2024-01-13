import React from 'react'


function StepSection(){
    const styleimg={
        backgroundImage: 'url("/bg-sidebar-desktop.svg")',
        backgroundRepeat: 'no-repeat'
    }
    return(
        <section className="step-section col-span-1 px-6 py-2 text-white" style={styleimg}>
            <div className="flex items-center my-6">
                <button className="mr-3">1</button>
                <div className="step-info leading-2">
                    <p className="text-sm font-light">STEP 1</p>
                    <h6 className="text-sm">YOUR INFO</h6>
                </div>
            </div>
            <div  className="flex items-center my-6">
                <button className="mr-3">2</button>
                <div className="step-info leading-2">
                    <p  className="text-sm font-light">STEP 2</p>
                    <h6 className="text-sm">SELECT PLAN</h6>
                </div>
            </div>
            <div  className="flex items-center my-6">
                <button className="mr-3">3</button>
                <div className="step-info leading-2">
                    <p  className="text-sm font-light">STEP 3</p>
                    <h6 className="text-sm">ADD-ONS</h6>
                </div>
            </div>
            <div  className="flex items-center my-6">
                <button className="mr-3">4</button>
                <div className="step-info leading-2">
                    <p  className="text-sm font-light">STEP 4</p>
                    <h6 className="text-sm">SUMMARY</h6>
                </div>
            </div>   
           
        </section>
    )
}
export default StepSection;