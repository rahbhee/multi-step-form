import React, {useEffect, useState, useRef} from 'react';

const Stepper = ({steps, currentStep}) =>{
    const [newStep, setNewStep] = useState([])

    const stepRef = useRef();

    const updateStep = (stepNumber, steps) =>{

    }

    useEffect(() =>{

        const stepsState = steps.map((step, index) =>
        Object.assign(
            {},
            {
                description: step,
                completed: false,
                highlighted: index = 0 ? true : false,
                selected: index = 0 ? true : false,
            }
        )
        )

        stepRef.current = stepsState;

        const current = updateStep(currentStep -1, stepRef.current);
        setNewStep(current)
     }, [steps, currentStep]);

const displaySteps = newStep.map((step, index)) => {
    return(
            <>
            <div className="flex items-center my-6">
          <button className="mr-3">1</button>
          <div className="step-info leading-2">
              <p className="hidden lg:block xl:block lg:text-sm font-light">STEP 1</p>
              <h6 className="hidden lg:block xl:block text-sm">YOUR INFO</h6>
          </div>
        </div>
        <div className="flex items-center my-6">
          <button className="mr-3">2</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 2</p>
              <h6 className="hidden lg:block xl:block text-sm">SELECT PLAN</h6>
          </div>
        </div>
        <div className="flex items-center my-6">
          <button className="mr-3">3</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 3</p>
              <h6 className="hidden lg:block xl:blocktext-sm">ADD-ONS</h6>
          </div>
        </div>
        <div  className="flex items-center my-6">
          <button className="mr-3">4</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 4</p>
              <h6 className="hidden lg:block xl:block text-sm">SUMMARY</h6>
          </div>
        </div> 
          </>   
        )
}
   

    return(
        <section className="form-section xl:col-span-2 xl:col-span-2 xl:ml-16 xl:mr-16 py-7 px-5">
            {displaySteps}
        </section>
    )
}
export default Stepper;