import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from "react-notifications";
import Stepper from '../../../components/create/stepper';
import catalogs from '../../../assets/json/catalogs.json';
import './share.css';
import { isEmpty } from '../../../utils/utils';

function SignAgreement() {
  const history = useHistory();
  const { name, id } = useParams();
  const [item, setItem] = useState();
  const [read, setRead] = useState(false);
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const data = catalogs.filter((val) => {
      return val.name.toLowerCase() === name;
    });
    if (data.length > 0 && data[0].items.length > 0) {
      setItem(data[0].items[id])
    }
  }, [id, name]);

  const handleNext = () => {
    if (!read || isEmpty(fullName)) {
      NotificationManager.error("Please check and type full name", "", 3000);
      return;
    }
    history.push(`/syndicate/share/${name.toLowerCase()}/${id}/3`);
  }

  const handleCheck = (e) => {
    setRead(e.target.checked);
  }

  const handleChange = (e) => {
    setFullName(e.target.value);
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
          <div className="x-font11 wei-600">
            <span>You are booking a 10% share of </span>
            <span className='text-capitalize italic'>{item?.name}</span>
          </div>
          <div className='my-4'>
            <Stepper
              step="1"
              path={`/syndicate/share/${name}/${id}`}
              steps={['Confirm Details', 'Sign Agreement', 'Personal Info', 'Payment Info']}
            />
          </div>
          <div className='x-font11'>
            sign Agreement
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <p className='font-16 ls-1 italic'>This agreement is between you and [syndicate manager]. Please agree to the terms and type your name in the field below only if you agree to the terms of the agreement.</p>
          <div className='agree-content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo. Eget duis at tellus at urna condimentum mattis pellentesque id. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Egestas dui id ornare arcu odio ut sem nulla. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Laoreet non curabitur gravida arcu ac tortor. Cursus turpis massa tincidunt dui. Dignissim enim sit amet venenatis urna. Sed egestas egestas fringilla phasellus faucibus scelerisque. Urna porttitor rhoncus dolor purus non enim praesent elementum. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Dui vivamus arcu felis bibendum ut tristique. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Aenean et tortor at risus viverra adipiscing at.
            </p>
            <p>
              Nisl pretium fusce id velit ut tortor pretium viverra. Egestas dui id ornare arcu odio. In nisl nisi scelerisque eu. Fusce id velit ut tortor pretium viverra suspendisse potenti. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Risus pretium quam vulputate dignissim suspendisse in est. Tortor consequat id porta nibh venenatis cras sed. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Convallis posuere morbi leo urna molestie at elementum eu. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.
            </p>
            <p>
              Pharetra vel turpis nunc eget. Nisl tincidunt eget nullam non nisi est. Morbi quis commodo odio aenean sed. In iaculis nunc sed augue lacus viverra. Auctor elit sed vulputate mi. Parturient montes nascetur ridiculus mus. Et netus et malesuada fames ac turpis egestas maecenas. A lacus vestibulum sed arcu non odio euismod lacinia. Molestie at elementum eu facilisis sed odio morbi quis. Interdum velit euismod in pellentesque massa placerat. Ultricies mi eget mauris pharetra. Et netus et malesuada fames ac turpis egestas integer.
            </p>
          </div>
          <span className='font-16 wei-500 bule-color'>DOWNLOAD AGREEMENT</span>
          <div className="mt-3 justify-s">
            <div className="w80 mobile-width100 d-flex align-items-center">
              <input type="checkbox" className="checkbox-agree" name="read" onChange={handleCheck} />
              <label className="x-font5 my-0" style={{ marginLeft: "10px" }}> I have read and understand this agreement</label>
            </div>
          </div>
          <div className='d-flex flex-row gap-2 mt-3'>
            <input className='x-input5' placeholder='Type Full Name' onChange={handleChange} />
          </div>
          <div>
            <button className="x-button7 mt-3" onClick={handleNext} disabled={(!read || isEmpty(fullName))}>CONTINUE TO PERSONAL INFORMATION</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
        </div>
      </div>
    </div>
  )
}

export default SignAgreement;