import React from 'react'
import './App.css'
import StepSection from './stepsection'
import StepContent from './stepcontent'

function App() {

    return(
      <div className='flex justify-center place-items-center min-h-screen'>
        <main className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 xl:bg-white xl:p-1 rounded-lg">
        <StepSection/>
        <StepContent/>
        </main>
     </div>
    )
}
  
export default App;
