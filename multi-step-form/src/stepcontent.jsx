import React from 'react';
import PlansTwo from './planstwo';
import Button from './button';
import PlanBtn from './planbtn';
import AddOns from './addons';
import AddOnsTwo from './addonstwo'
import FinishUp from './finishup';
import FinishUpTwo from './finishuptwo';
import Thank from './thank'
/*import Info from './info';*/

function StepContent(){
    return (
        <>
           <section className="form-section lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
               {/*<Info/>*/}
              {/*} <Plans/>
    <PlansTwo/>
    <AddOns/>
    <AddOnsTwo/>
    <FinishUp/>
    <FinishUpTwo/>*/}
    <Thank/>
             </section>
             <Button/>
        </>
      
)
}
          
export default StepContent;