import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs";
import DropdownItem from './dropdownItem';
import { useApiContext } from '../../contexts';

function MobileDropDown(props){
    const history = useHistory();
    const [state, { logout }] = useApiContext();
    const {closeModal} = props;

    const gotoSignup = () =>{
        history.push("/signup");
        closeModal();
    }
    const handleLogout = () =>{
        logout();
        closeModal();
    }
    return(
        <div className='nav-mobile-content'>
            <DropdownItem title = "Create Syndicate" type="1" closeModal = {closeModal}/>
            <DropdownItem title = "Join Syndicate" type="2" closeModal = {closeModal}/>
            <DropdownItem title = "Discover" closeModal = {closeModal}/>
            <DropdownItem title = "Learn More" closeModal = {closeModal}/>
            <div className='nav-mobile-content-bottom'>
                {state && state.isLogin?
                    <div>
                        <Link to = "/signin" onClick = {handleLogout} className='d-flex justify-content-between mb-3'>
                            <span className='x-font16'>Logout</span>
                            <span ><BsArrowRight size = "20px" color = "#0EA3D9" /></span>
                        </Link> 
                    </div>
                :<>
                    <div >
                        <Link to = "/signin" onClick = {closeModal} className='d-flex justify-content-between mb-3'>
                            <span className='x-font16'>Sign In</span>
                            <span ><BsArrowRight size = "20px" color = "#0EA3D9" /></span>
                        </Link>
                    </div>
                    <div>
                        <button className='x-button9' onClick={gotoSignup}>Become An Insider</button>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default MobileDropDown;