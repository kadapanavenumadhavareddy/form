import {FC,ReactElement} from 'react';
import './sideBar.css'
interface props {
    activeStep:number
}
const SideBar:FC<props>=({activeStep}):ReactElement=>{
    const stepNames:string[]=['YOUR INFO','SELECT PLAN','ADD-ONS','SUMMARY']
    return (
        <div className='side-bar'>
            {
                stepNames.map((value,index):ReactElement=>(
                    <div className='button'>
                    <h5 className={`button-rounded ${activeStep === index+1 ? 'active':''}`}>{index+1}</h5>
                    <div className='button-text'>
                        <h6>Step-{index+1}</h6>
                        <h5>{value}</h5>
                    </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default SideBar