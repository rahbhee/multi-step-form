import React from 'react';
import Info from './info';
import Plans from './plan'
import PlansTwo from './planstwo';
import Button from './button';
import PlanBtn from './planbtn';
import AddOns from './addons';
import AddOnsTwo from './addonstwo'
import FinishUp from './finishup';
import FinishUpTwo from './finishuptwo';
import Thank from './thank';
/*import Info from './info';*/

function StepContent(){
   

    const pages = [
        "info",
        "planstwo",
        "addons",
        "finishup",
        "finishuptwo",
        "thank",
        "addonstwo",
        "planstwo"
    ]

    return (
        <>
           <section className="form-section h-auto lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
             <Info/>
             <PlansTwo/>
             <AddOns/>
             <FinishUp/>
             <FinishUpTwo/>
             <Thank/>
             <AddOnsTwo/>
             <PlansTwo/>
           </section>
             <Button/>
        </>
      
)
}
          
export default StepContent;