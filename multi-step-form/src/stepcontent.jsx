import React, {useState, useEffect} from 'react';
import Info from './info';
import Plans from './plan'
import AddOns from './addons';
import FinishUp from './finishup';
import FinishUpTwo from './finishuptwo';
import Thank from './thank';



 function getFormData(){
    const storedData = localStorage.getItem("form")
    if(!storedData) return{
    username: '',
    email: '',
    phone: ''
    }
    return JSON.parse(storedData)
  }

function StepContent(){

   const [page, setPage] = useState(0)
   const [isChecked, setIsChecked] = useState(false);
   const [formData, setFormData] = useState(getFormData);
   const [errors, setErrors] = useState({});


  useEffect(() =>{
  localStorage.setItem('form', JSON.stringify(formData));
  }, [formData])

 

  const handleNextPage = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
     
      setPage((currPage) => currPage + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevPage = () =>{
    if(page > 0){
      setPage((currPage) => currPage - 1)
    }
  }
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
  
  const handleToggle = () =>{
    setIsChecked((prevIsChecked) => {
      const newIsChecked = !prevIsChecked;
      localStorage.setItem('isChecked', JSON.stringify(newIsChecked));
      return newIsChecked;
    });
};

useEffect(() => {
  const storedIsChecked = localStorage.getItem('isChecked');
  if (storedIsChecked !== null) {
    setIsChecked(JSON.parse(storedIsChecked));
  }
}, []);

    const pageDisplay = () =>{
      if(page === 0){
        return <Info formData={formData} errors={errors} onFormChange={handleFormChange} />
      }else if(page === 1){
        return <Plans isChecked={isChecked} handleToggle={handleToggle}/>
      }else if(page === 2){
        return <AddOns isChecked={isChecked}/>
      }else if(page === 3){
        return <FinishUp isChecked={isChecked}/>
      }else{
        return <Thank/>
      }
    }
    
    return (
        <>
           <section className="form-section h-auto lg:col-span-2 lg:col-span-2 lg:ml-16 lg:mr-16 py-7 px-5 rounded-lg">
            {pageDisplay()}
            <div className="desktop-btn flex hidden lg:flex md:flex justify-between">
            <button className="back" onClick={handlePrevPage}>Go back</button>
            <button className="rounded-lg next" onClick={handleNextPage}>Next Step</button>
           </div>
           </section>
           <div className="mobile flex lg:hidden md;hidden justify-between">
           <button  className="back"  onClick={handlePrevPage}>Go back</button>
            <button className="rounded-lg next" onClick={handleNextPage}>Next Step</button>
           </div>
        </>    
)
}
          
export default StepContent;