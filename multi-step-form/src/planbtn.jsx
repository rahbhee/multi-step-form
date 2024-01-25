import React from 'react'
import ToggleSwitch from "./Toggle";

function PlanBtn(){
    return(
        <div className='flex plan-btn'>
            <p className='mr-6'>Monthly</p>
            <ToggleSwitch/>
            <p className='ml-6'>Yearly</p>
        </div>
    )
}

export default PlanBtn;