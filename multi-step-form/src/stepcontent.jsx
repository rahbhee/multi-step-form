import React, {useState} from 'react';
import Info from './info';
import Plans from './plan'
import PlansTwo from './planstwo';
import AddOns from './addons';
import AddOnsTwo from './addonstwo'
import FinishUp from './finishup';
import FinishUpTwo from './finishuptwo';
import Thank from './thank';


function StepContent(){
   const [page, setPage] = useState(0)
   const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleNextPage = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setPage((currPage) => currPage + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number is not valid';
    }

    return validationErrors;
  };

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
   
    const pageDisplay = () =>{
      if(page === 0){
        return <Info formData={formData} errors={errors} onFormChange={handleFormChange} />
      }else if(page === 1){
        return <Plans/>
      }else if(page === 2){
        return <PlansTwo/>
      }else if(page === 3){
        return <AddOns/>
      }else if(page === 4){
        return <AddOnsTwo/>
      }else if(page === 5){
        return <FinishUp/>
      }else if(page === 6){
        return <FinishUpTwo/>
      }else{
        return <Thank/>
      }
    }

    return (
        <>
           <section className="form-section h-auto lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
            {pageDisplay()}
            <div className="desktop-btn flex hidden lg:flex md:flex justify-between">
            <p>Go back</p>
            <button className="rounded-lg" onClick={handleNextPage}>Next Step</button>
           </div>
           </section>
           <div className="mobile flex lg:hidden md;hidden justify-between">
            <p>Go back</p>
            <button className="rounded-lg" onClick={handleNextPage}>Next Step</button>
           </div>
        </>    
)
}
          
export default StepContent;