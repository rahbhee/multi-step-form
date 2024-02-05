import React from 'react';

function Info({ formData, errors, onFormChange }){
     const handleChange = (e) => {
        const {name, value} = e.target;
        onFormChange(name, value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
          alert('Form Submitted successfully');
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
    
    return(
        <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mt-4 mb-6 pr-24">Personal info</h1>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>
        <div className="">
        <label className="mt-6 text-sm font-semibold">Name</label>
        <input className="rounded-lg mb-8 mt-2" value={formData.username} name="username" placeholder="e.g Stephen King" onChange={handleChange}
        />
         {errors.username && <p  className='span'>{errors.username}</p>}
        </div>
        <div>
        <label className="text-sm font-semibold">Email Address</label>
        <input className="rounded-lg mb-8 mt-2" value={formData.email} name="email" placeholder="e.g stephenking@lorem.com"  onChange={handleChange}/>
        {errors.email && <p className='span'>{errors.email}</p>}
        </div>
        <div>
        <label className="text-sm font-semibold">Phone number</label>
        <input className="rounded-lg mb-8 mt-2" value={formData.phone} name="phone" placeholder="e.g +1 234567890"  onChange={handleChange}/>
        {errors.phone && <p  className='span'>{errors.phone}</p>}
        </div>
        </form>
    )     
}
export default Info;