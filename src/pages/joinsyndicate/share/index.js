import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import { numberWithCommas } from '../../../utils/utils';
import catalogs from '../../../assets/json/catalogs.json';
import './share.css';

function ConfirmDetail() {
  const history = useHistory();
  const { name, id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const data = catalogs.filter((val) => {
      return val.name.toLowerCase() === name;
    });
    if (data.length > 0 && data[0].items.length > 0) {
      setItem(data[0].items[id])
    }
  }, [id, name]);

  const handleNext = () => {
    history.push(`/syndicate/share/${name.toLowerCase()}/${id}/2`);
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
              step="0"
              path={`/syndicate/share/${name}/${id}`}
              steps={['Confirm Details', 'Sign Agreement', 'Personal Info', 'Payment Info']}
            />
          </div>
        </div>
      </div>
      <div className='x-font11'>
            Confirm details
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <p className='font-16 ls-1 italic'>Please read the information below carefully and ensure everything is correct.</p>
          <div className='detail-box'>
            <span className="title">Item:</span>
            <span>{item?.details?.item}</span>
          </div>
          <div className='detail-box'>
            <span className="title">Upfront Cost:</span>
            <span>${numberWithCommas(item?.details?.upfront)}</span>
          </div>
          <div className='detail-box'>
            <span className="title">Percentage:</span>
            <span>${item?.details?.percentage}</span>
          </div>
          <div className='detail-box'>
            <span className="title">Ownership Type:</span>
            <span>${item?.details?.ownership_type}</span>
          </div>
          <div className='detail-box'>
            <span className="title">Syndicate Manager:</span>
            <span>${item?.details?.syndicate_manager}</span>
          </div>
          <div className='mb-4'>
            <img className='w100 h100' src={item?.images[0]} alt="icon" />
          </div>
          <div className='d-flex gap-2'>
            <button className="x-button7" onClick={handleNext}>CONTINUE TO SIGN AGREEMENT</button>
            <button className="x-button5">CANCEL</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
        </div>
      </div>
    </div>
  )
}

export default ConfirmDetail;