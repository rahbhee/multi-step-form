import React, {useState} from 'react';
import Info from './info';
import Plans from './plan'
import PlansTwo from './planstwo';
import AddOns from './addons';
import AddOnsTwo from './addonstwo'
import FinishUp from './finishup';
import FinishUpTwo from './finishuptwo';
import Thank from './thank';


function StepContent(){
   const [page, setPage] = useState(0)
    const pageDisplay = () =>{
      if(page === 0){
        return <Info onValidation={handleValidationErrors}/>
      }else if(page === 1){
        return <Plans/>
      }else if(page === 2){
        return <PlansTwo/>
      }else if(page === 3){
        return <AddOns/>
      }else if(page === 4){
        return <AddOnsTwo/>
      }else if(page === 5){
        return <FinishUp/>
      }else if(page === 6){
        return <FinishUpTwo/>
      }else{
        return <Thank/>
      }
    }

    return (
        <>
           <section className="form-section h-auto lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
            {pageDisplay()}
            <div className="desktop-btn flex hidden lg:flex md:flex justify-between">
            <p>Go back</p>
            <button className="rounded-lg" onClick={() =>{setPage((currPage) => currPage + 1)}}>Next Step</button>
            </div>
           </section>
           <div className="mobile flex lg:hidden md;hidden justify-between">
            <p>Go back</p>
            <button className="rounded-lg" onClick={() =>{setPage((currPage) => currPage + 1)}}>Next Step</button>
        </div>
        </>    
)
}
          
export default StepContent;