import React from 'react';

function Button (){
    return(
        <div className="mobile-btn flex justify-between md:hidden lg:hidden">
            <p>Go back</p>
            <button className="rounded-lg">Next Step</button>
        </div>
    )
    
}
export default Button;