import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import MaskInput from 'react-maskinput';
import Stepper from '../../../components/create/stepper';
import catalogs from '../../../assets/json/catalogs.json';
import './share.css';
import { isEmpty } from '../../../utils/utils';

function PaymentInfo() {
  const history = useHistory();
  const { name, id } = useParams();
  const [item, setItem] = useState();
  const [submit, setSubmit] = useState(false);
  const [card, setCard] = useState('0000-0000-0000-0000');
  const [personalInfo, setPersonalInfo] = useState({
    card_name: "",
    card_number: "",
    expiration: "",
  });
  const [error, setError] = useState({
    card_name: true,
    card_number: true,
    expiration: true
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
    for (var key in error) {
      if (error[key]) return;
    }
    history.push(`/syndicate/share/${name.toLowerCase()}/${id}/5`);
  }

  const handleCard = (e) => {
    const value = error;
    if (isEmpty(e.target.value)) {
      value.card_number = true;
    } else {
      value.card_number = false;
    }
    setError(value);
    setCard(e.target.value);
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
              step="3"
              path={`/syndicate/share/${name}/${id}`}
              steps={['Confirm Details', 'Sign Agreement', 'Personal Info', 'Payment Info']}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <p className='font-16 ls-1 italic'>Enter your payment information below.</p>
          <div>
            <div className="d-flex fd-c mt-2">
              {(submit && error.card_name) && (
                <span className='font-14 text-pink italic'>* Required</span>
              )}
              <input className="x-input5 mobile-width100" placeholder="Name on Card" name="card_name" onChange={handleChange} />
            </div>
            <div className="d-flex fd-c mt-2">
              {(submit && error.card_number) && (
                <span className='font-14 text-pink italic'>* Required</span>
              )}
              <div className='visa-card-input'>
                <MaskInput className="x-input5 mobile-width100" mask={'0000-0000-0000-0000'} size={20} placeholder="Card Number" onChange={handleCard} />
                <img className='visa-image' src="/images/wallet/visa.png" alt="" />
              </div>
            </div>
            <div className="d-flex fd-c mt-2">
              {(submit && error.expiration) && (
                <span className='font-14 text-pink italic'>* Required</span>
              )}
              <input className="mobile-width100 x-input5" placeholder="Expiration" name="expiration" onChange={handleChange} />
            </div>
          </div>
          <div className='d-flex flex-row gap-2 mt-3'>
            <button className="mobile-width100 x-button7" onClick={handleNext}>CONFIRM AND CONTINUE</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
        </div>
      </div>
    </div>
  )
}

export default PaymentInfo;