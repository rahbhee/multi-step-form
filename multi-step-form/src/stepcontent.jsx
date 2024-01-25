import React from 'react';
import PlansTwo from './planstwo';
import Button from './button';
import PlanBtn from './planbtn';
import AddOns from './addons';
/*import Info from './info';*/

function StepContent(){
    return (
        <>
           <section className="form-section lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
               {/*<Info/>*/}
              {/*} <Plans/>
    <PlansTwo/>
    <AddOns/>*/}
    <FinishUp/>
                 <div className="desktop-btn hidden lg:flex md:flex md:hidden lg:justify-between md:justify-between">
                 <p>Go back</p>
                 <button className="rounded-lg">Next Step</button>
                 </div>
             </section>
             <Button/>
        </>
      
)
}
          
export default StepContent;