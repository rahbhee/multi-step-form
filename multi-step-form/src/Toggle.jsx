import React, {useState} from 'react';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () =>{
        setIsChecked(!isChecked);
    };

    return(
        <div className='inline-block'>
              <label className='switch'>
            <input type='checkbox' checked={isChecked} onChange={handleToggle}/>
            <span className='slider'></span>
        </label>
        </div>
      
    )
}
export default ToggleSwitch;