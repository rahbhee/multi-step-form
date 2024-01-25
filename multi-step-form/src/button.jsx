import React from 'react';

function Button (){
    return(
        <div className="mobile lg:hidden md:hidden flex justify-between">
            <p>Go back</p>
            <button className="rounded-lg">Next Step</button>
        </div>
    )
}
export default Button;