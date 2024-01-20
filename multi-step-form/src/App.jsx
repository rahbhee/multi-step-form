import React from 'react'
import './App.css'
import {useState} from 'react'
import StepSection from './components/stepsection';
import StepContent from './components/stepcontent';
import Info from './components/steps/stepone';
import Plans from './components/steps/steptwo';
import AddOns from './components/steps/stepthree';
import Summary from './components/steps/stepfour';

function App() {
  const [currentStep, setCurrentStep] = useState(1);


  const steps = [
    "Info",
    "Plans",
    "Add-ons",
    "Summary"
   ];

   const displaySteps = (step) =>{

    switch(step){
        case 1:
            return <Info/>
        case 2:
            return <Plans/>
        case 3:
            return <AddOns/>
        case 4:
            return <Summary/>
    }

   }
  
   
    return(
      <div className='flex justify-center place-items-center min-h-screen'>
        <main className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 xl:bg-white xl:p-3 rounded-lg">
            <StepSection/>
            <StepContent
            steps ={steps}
            currentStep = {currentStep}/>
            <Info/> 
            <Plans/>
            <AddOns/>
            <Summary/>
        </main>
        </div>
    )
}
  

export default App;
