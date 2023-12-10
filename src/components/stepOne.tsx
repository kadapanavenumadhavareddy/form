import {FC,ReactElement} from 'react';
import './stepOne.css'
const StepOne:FC=():ReactElement=>{
    return (
        <div className='stepOne'>
            <h1>Personal Info</h1>
            <p>Please Provide your name, email address, and phone number</p>
            <label htmlFor="name">Name</label><br/>
            <input type="text" name="name" id="name" placeholder='e.g. Stephen King' /><br/>
            <label htmlFor="email">Email Address</label><br/>
            <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem' /><br/>
            <label htmlFor="phone">Phone Number</label><br/>
            <input type="text" name="=phone" id="phone" placeholder='e.g.+1 234 567 890' /><br/>
            <button>Next Step</button>
        </div>
    )
}

export default StepOne