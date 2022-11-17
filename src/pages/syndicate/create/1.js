import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import CardItem from '../../../components/create/card';
import { useApiContext } from '../../../contexts';



function Create1() {
  const history = useHistory();
  const [state, { setInfo }] = useApiContext();
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: ""
  });

  const handlePersonalInfo = () => {
    setInfo(0, personalInfo);
    history.push("/create-syndicate/2");
  }

  return (
    <div className="x-create1 container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className='x-font13 mt-5'>
            Create a Listing
          </div>
          <div className="x-font14 font-22 mt-2">
            Tell us about your syndicate.
          </div>
          <div className='my-4'>
            <Stepper
              step="0"
              path="/create-syndicate"
              steps={['Personal info', 'Syndicate info', 'Syndicate Category', 'Create Prospectus', 'Upload Media']}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <div className='x-font11'>
            Personal Information
          </div>
          <div className="x-font5 mt-3 italic">
            Enter your personal information below.
          </div>
          <div className="x-font5 font-16 ls-1 mt-1">
            If you have an account, you can <Link className='no-underline' to="/signin">Sign In</Link> now to auto-fill this information.
          </div>
          <div className="mt-4">
            <div>
              <div className="mt-2">
                <input className="mobile-width100 x-input4 mr-3" placeholder="First name" value={personalInfo.firstName} onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })} />
                <input className="mobile-width100 x-input4" placeholder="Last name" value={personalInfo.lastName} onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Address" value={personalInfo.address} onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Apt/ Suite/ Other" value={personalInfo.apt} onChange={(e) => setPersonalInfo({ ...personalInfo, apt: e.target.value })} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="City" value={personalInfo.city} onChange={(e) => setPersonalInfo({ ...personalInfo, city: e.target.value })} />
              </div>
              <div className="mt-2 mobile-width100 w-100">
                <input className="mobile-width100 x-input4 mr-3" placeholder="State" value={personalInfo.state} onChange={(e) => setPersonalInfo({ ...personalInfo, state: e.target.value })} />
                <input className="mobile-width100 x-input4" placeholder="Zip Code" value={personalInfo.zip} onChange={(e) => setPersonalInfo({ ...personalInfo, zip: e.target.value })} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Email Address" value={personalInfo.email} onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
              </div>
              <div className="mt-5">
                <button className="x-button8 x-font3" onClick={handlePersonalInfo}>CONTINUE TO SYNDIATE INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="mt-5">
            <CardItem
              title="Looking For Prices"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit.Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
              button="MORE INFO"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create1;