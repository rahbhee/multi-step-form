import React, {useState}from 'react'
import './App.css'
import StepSection from './stepsection'
import StepContent from './stepcontent'

function App() {
  const [page, setPage] = useState(0)

    return(
      <div className='flex justify-center place-items-center lg:min-h-screen'>
        <main className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 xl:bg-white xl:p-1 rounded-lg">
        <StepSection setPage={setPage} page={page}/>
        <StepContent  setPage={setPage} page={page}/>
        </main>
     </div>
    )
}
  
export default App;
