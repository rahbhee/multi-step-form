import React from 'react'
import StepSection from './stepsection.jsx'
import FormSection from './formsection.jsx'

function MainArticle (){
    return(
        <main className="grid grid-cols-3 bg-white p-3 rounded-lg">
            <StepSection/>
            <FormSection/>
        </main>
    )
}
export default MainArticle;