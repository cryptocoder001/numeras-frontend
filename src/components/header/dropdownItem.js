import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function DropdownItem(props){
    const {title, type, closeModal} = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(!open)
    }

    return(
        <div>
            <div className='nav-mobile-item' onClick={handleOpen}>
                <span className='x-font16'>{title}</span>
                {open?
                    <span><BsDashLg size = "20px" color = "#0EA3D9"/></span>
                    :
                    <span><BsPlusLg size = "20px" color = "#0EA3D9"/></span>
                }
            </div>
            {open?
                <div className='x-nav-dropdown mt-3'>
                {
                type==1?(
                    <div className='pl-3'>
                        <Link to = "/Create-syndicate" onClick = {closeModal} className='x-font17 mt-5 mb-5'>
                            Get Started for Free
                        </Link>
                        <div className='x-font17 mt-3 mb-3'>
                            Our Service
                        </div>
                        <div className='x-font17 mt-3 mb-3'>
                            Manager Basics
                        </div>
                        <div className='x-font17 mt-3 mb-2'>
                            Pricing
                        </div>
                    </div>
                ):
                type==2?(
                    <div className='pl-3'>
                        <Link to = "/join-syndicate" onClick = {closeModal} className='x-font17 mt-5 mb-5'>
                            Syndicate Catalog
                        </Link>
                        <div className='x-font17 mt-3 mb-3'>
                            Member Basics
                        </div>
                        <div className='x-font17 mt-3 mb-3'>
                            Choosing a Syndicate
                        </div>
                        <div className='x-font17 mt-3 mb-2'>
                            FAQ
                        </div>
                    </div>
                ):<></>

                }
                </div>
                :<></>
            }
        </div>
    )
}

export default DropdownItem;