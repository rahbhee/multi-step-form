import React from 'react'
import check from '/icon-thank-you.svg'

function Thank(){
    return(
        <div className="w">
            <img src={check}/>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need </p>
        </div>
    )
}
export default Thank;