import React from 'react';

function Info(){
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.username.trim()){
            validationErrors.username="username is required"
        }
        if(!formData.email.trim()){
            validationErrors.email ="email is required"
        }else if(/\S+@\S\.\S+/.test(formData.email)){
            validationErrors.email="email is not valid"
        }
        
    }
    return(
        <form className="" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mt-4 mb-6 pr-24">Personal info</h1>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>
        <div className="">
        <label className="mt-6 text-sm font-semibold">Name</label>
        <input className="rounded-lg mb-8 mt-2" placeholder="e.g Stephen King" onChange={handleChange}/>
        </div>
        <div>
        <label className="text-sm font-semibold">Email Address</label>
        <input className="rounded-lg mb-8 mt-2" placeholder="e.g stephenking@lorem.com"/>
        </div>
        <div>
        <label className="text-sm font-semibold">Phone number</label>
        <input className="rounded-lg mb-8 mt-2"  placeholder="e.g +1 234567890"/>
        </div>
        <div className="button hidden md:flex lg:flex">
        <p>Go back</p>
        <div>
        <button className="rounded-lg">Next Step</button>
        </div>
        </div>
        </form>
    )     
}
export default Info;