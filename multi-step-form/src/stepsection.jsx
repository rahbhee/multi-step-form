import React from 'react';

function StepSection ({setPage, page}){

  const stepOne = () => {
    setPage(0)
 console.log("clicked")}
 const stepTwo = () => {
  setPage(1)
console.log("clicked")}
const stepThree = () => {
  setPage(2)
console.log("clicked")}
const stepFour = () => {
  setPage(3)
console.log("clicked")}

    return(
        <section className="flex lg:flex-col step-section px-6 py-2 text-white">
         <div className="flex items-center my-6">
          <button className={page == 0 ? "highlighted" : "unhighlighted"} onClick={stepOne}>1</button>
          <div className="step-info leading-2">
              <p className="hidden xl:block lg:block lg:text-sm font-light">STEP 1</p>
              <h6 className="hidden lg:block xl:block text-sm">YOUR INFO</h6>
          </div>
        </div>
        <div className="flex items-center my-6">
          <button className={page == 1 ? "highlighted" : "unhighlighted"} onClick={stepTwo}>2</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 2</p>
              <h6 className="hidden lg:block xl:block text-sm">SELECT PLAN</h6>
          </div>
        </div>
        <div className="flex items-center my-6">
          <button className={page == 2 ? "highlighted" : "unhighlighted"} onClick={stepThree}>3</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 3</p>
              <h6 className="hidden lg:block xl:block text-sm">ADD-ONS</h6>
          </div>
        </div>
        <div  className="flex items-center my-6">
          <button className={page == 3 ? "highlighted" : "unhighlighted"} onClick={stepFour} >4</button>
          <div className="step-info leading-2">
              <p  className="hidden lg:block xl:block text-sm font-light">STEP 4</p>
              <h6 className="hidden lg:block xl:block text-sm">SUMMARY</h6>
          </div>
        </div>
        </section>
    )
}
export default StepSection;