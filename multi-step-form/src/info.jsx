import React from 'react';

function Info(){
    return(
        <form className="">
        <h1 className="text-3xl font-bold mt-2 mb-2 pr-24">Personal info</h1>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>
        <div className="">
        <label className="mt-6 text-sm font-semibold">Name</label>
        <input className="rounded-lg mb-8 mt-2" placeholder="e.g Stephen King"/>
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