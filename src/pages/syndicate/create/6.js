import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsEye, BsEyeSlash } from "react-icons/bs";

function Create6() {
  const history = useHistory();
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="x-create1 container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className='x-font13 mt-5'>
            Create a Listing
          </div>
          <div className="x-font7 font-22 mt-3">
            You’re almost done!
          </div>
          <div className="x-font5 mt-2">
            Create an account in a few easy steps to finish creating your syndicate.
          </div>
          <div className="x-font5">
            Create a username and password below.
          </div>

          <div>
            <div className="mt-4">
              <div className='po-re'>
                <input className="x-input6 mobile-width100" style={{ width: '50%' }} placeholder="Username" />
              </div>
            </div>
            <div className='po-re'>
              <div className="mt-2">
                <div className='po-re w50 mobile-width100'>
                  <input type={`${showPass ? 'text' : 'password'}`} className="x-input6 mobile-width100" style={{ width: '100%' }} placeholder="Password" />
                  {
                    showPass ?
                      <BsEyeSlash onClick={() => { setShowPass(!showPass) }} className='password-switch bule-color' />
                      :
                      <BsEye onClick={() => { setShowPass(!showPass) }} className='password-switch bule-color' />
                  }
                </div>
              </div>
            </div>
            <button className="x-button2 x-font3 mt-2 mobile-width100" style={{ width: '50%' }} onClick={() => history.push("/")}>CONTINUE TO SYNDIATE INFORMATION</button>
          </div>
          <div className="x-font5 mt-4">
            Already have an account? <span className='bule-color uppercase cu-po' onClick={() => history.push("/signin")} >sign in now</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-4 text-center">

        </div>
      </div>
      <div style={{ marginTop: '500px' }}></div>
    </div>
  )
}

export default Create6;