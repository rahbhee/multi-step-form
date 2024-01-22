import React from 'react';
import Plans from './plan';
/*import Info from './info';*/

function StepContent(){
    return (
        <section className="form-section xl:col-span-2 xl:col-span-2 xl:ml-16 xl:mr-16 py-7 px-5 rounded-lg">
               {/*<Info/>*/}
               <Plans/>
    </section>
)
}
          
export default StepContent;