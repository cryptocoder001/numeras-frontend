import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import catalogs from '../../../assets/json/catalogs.json';
import './share.css';
import { isEmpty } from '../../../utils/utils';

function PersonalInfo() {
  const history = useHistory();
  const { name, id } = useParams();
  const [item, setItem] = useState();
  const [read, setRead] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    email: ""
  });
  const [error, setError] = useState({
    firstName: true,
    lastName: true,
    address: true,
    apt: true,
    city: true,
    state: true,
    zip: true,
    email: true
  })

  useEffect(() => {
    const data = catalogs.filter((val) => {
      return val.name.toLowerCase() === name;
    });
    if (data.length > 0 && data[0].items.length > 0) {
      setItem(data[0].items[id])
    }
  }, [id, name]);

  const handleNext = () => {
    setSubmit(true);
    if (!read) {
      return;
    }
    for (var key in error) {
      console.log(error[key])
      if (error[key]) return;
    }
    history.push(`/syndicate/share/${name.toLowerCase()}/${id}/4`);
  }

  const handleCheck = (e) => {
    setRead(e.target.checked);
  }

  const handleChange = (e) => {
    const value = error;
    if (isEmpty(e.target.value)) {
      value[e.target.name] = true;
    } else {
      value[e.target.name] = false;
    }
    setError(value);
    const data = personalInfo;
    data[e.target.name] = e.target.value;
    setPersonalInfo(data);
    setSubmit(false);
  }

  return (
    <div className="container">
      <div className="row mb-3">
        <div className='col-sm-12 col-md-12 mt-2'>
          <div className="font-14 justify-start gap-2">
            <Link to={`/join-syndicate`} className="no-underline site-color">Syndicate Catalog</Link>
            <span>:</span>
            <Link to={`/syndicate/${name.toLowerCase()}`} className="no-underline site-color text-capitalize">{name} Catalog</Link>
            <span>:</span>
            <Link to={`/syndicate/${name.toLowerCase()}/${id}`} className="no-underline site-color text-capitalize">{item?.name}</Link>
            <span>:</span>
            <span className='text-capitalize'>{name} Share</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-7 mt-4">
          <div className='x-font13 mt-4'>
            Book Share
          </div>
          <div className="x-font4 wei-600">
            <span>You are booking a 10% share of </span>
            <span className='text-capitalize italic'>{item?.name}</span>
          </div>
          <div className='my-4'>
            <Stepper
              step="2"
              path={`/syndicate/share/${name}/${id}`}
              steps={['Confirm Details', 'Sign Agreement', 'Personal Info', 'Payment Info']}
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
                <input className="mobile-width100 x-input4 mr-3" placeholder="First name" name="firstName" onChange={handleChange} />
                <input className="mobile-width100 x-input4" placeholder="Last name" name="lastName" onChange={handleChange} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Address" name="address" onChange={handleChange} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Apt/ Suite/ Other" name="apt" onChange={handleChange} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="City" name="city" onChange={handleChange} />
              </div>
              <div className="mt-2 mobile-width100 w-100">
                <input className="mobile-width100 x-input4 mr-3" placeholder="State" name="state" onChange={handleChange} />
                <input className="mobile-width100 x-input4" placeholder="Zip Code" name="zip" onChange={handleChange} />
              </div>
              <div className="mt-2">
                <input className="mobile-width100 x-input5" placeholder="Email Address" name="email" onChange={handleChange} />
              </div>
              <div className="mt-3 justify-s">
                <div className="w80 mobile-width100 d-flex align-items-center">
                  <input type="checkbox" className="checkbox-agree" name="vehicle1" onChange={handleCheck} />
                  <label className="x-font5 font-14 my-0" style={{ marginLeft: "10px" }}> I agree to the numeras <span className="bule-color">Terms</span> and <span className="bule-color">Access Agreement</span></label>
                </div>
              </div>

              <div className="mt-5">
                <button className="x-button8 x-font3" onClick={handleNext} disabled={(!read)}>CONTINUE TO SYNDIATE INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;